'use strict'

const User = use("App/Models/User")
const Question = use("App/Models/Question")
const Exam = use("App/Models/Exam")
const Database = use('Database')
const { validate } = use('Validator');

class UserController {
    
  async create ({ request, response }) {
      
      const rules = {
        email: 'required|email|unique:users,email',
        username: 'required|unique:users,username',
        name: 'required',
        password: 'required'
      };
      
      const {name, email, username, password } = request.only([
        'name',
        'email',
        'username',
        'password'
      ]);

      const validation = await validate({ name, email, username, password }, rules);
      
      if (!validation.fails()) {
        try {
          const user = await User.create({name,email, username, password });
          return response.send({ message: 'User has been created' });
        } catch (err) {
          response.status(401).send({ error: 'Please try again' });
        }
      } else {
        response.status(401).send(validation.messages());
      }
  }

  async storeQuestion({ request, auth, response}) {
    
    try {
      await auth.check()
    } catch (error) {
      response.status(401).send({message: 'Missing or invalid api token'})
    }
    
    const {questionData, alternatives} = request.post()
    const user = await auth.getUser()
    const recordedQuestion = await user.questions().create(questionData)
    await recordedQuestion.alternatives().create(alternatives)
    await user.load('questions.alternatives')

    return user
  }

  async getQuestionsByUser({auth, response}) {
    
    try {
      await auth.check()
    } catch (error) {
      response.status(401).send({message: 'Missing or invalid api token'})
    }
    try {
      const user = await auth.getUser()
      await user.load('questions.alternatives')
    } catch (error) {
      response.status(401).send('You are not logged in')
    }

    return user

  }


  async show ({ auth, response }) {

    try {
      await auth.check()
    } catch (error) {
      response.status(401).send({message: 'Missing or invalid api token'})
    }
    return auth.getUser();
  }

  async list(response){
    
    try{
      const users = await User.all()
      return users
    }catch(err){
      response.status(422).send({message: 'Have no user.'})
    }
    
  }

  async listExam(response){
    try{
      const exams = await Exam.all()
      return exams
    }catch(err){
      response.status(422).send({message: 'Have no exams.'})
    }
  }
  
  async edit ({ params, request, response, auth }) {

    const user = await auth.getUser()

    if(parseInt(params.id) === user.id){
      
      const data = request.only(['name','bio','password','username','email'])
      
      if(data.name && data.bio && data.password && data.username && data.email){
      
        user.merge({name: data.name, bio: data.bio, password: data.password, username: data.username, email: data.email})
        await user.save()
        response.status(200).send({message: 'User has been updated.'})
      
      }else{
        response.status(422).send({message: "Missing data."})
      }
      
    }else{
      response.status(401).send({message: "You don't have permission to edit this user."})
    }
    
  }
  
  async makeExam({request,response,params,auth}){
    const exam = await Exam.find(params.id)
    //const user = await auth.getUser()
    const questions = await Database.from('questions').where('exam_id',exam.id)
    let alternatives = [];
    const questionslength = (await exam.questions().count())[0]['count(*)']
    /*let requestQuestions = []

    for(let i = 0; i < questionslength; i++){
      requestQuestions.push("Question"+(i+1))
    }*/

    for(let i = 0; i < questionslength; i++){
      alternatives.push(await Database.from('alternatives').where('question_id',questions[i].id))
    }

    /*const data = request.only(requestQuestions)*/
    /*let score = 0

    for(let i = 0; i < questionslength; i++){
      
      if(data[requestQuestions[i]]['selected_alternative'] == alternatives[i][0].right_alternative){
        score++;
      }
    }*/

    /*let userMake = await user.makeExams().attach([exam.id], (row) => {
      row.score = score
    })

    user.progress += score
    await user.save()*/

    return {exam,questions, alternatives} 

  }

  async submitedExam({request,response,params,auth}){
    
    const exam = await Exam.find(params.id)
    const user = await auth.getUser()

    const data = request.only(['score'])
    
    let userMake = await user.makeExams().attach([exam.id], (row) => {
      row.score = data.score
    })

    user.progress += data.score
    await user.save()

    // response.status(200).send({status: 'ok'})
    return userMake

  }

}

module.exports = UserController
