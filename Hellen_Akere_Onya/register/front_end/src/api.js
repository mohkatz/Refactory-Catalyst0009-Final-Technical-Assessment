import axios from 'axios';
//import students from "../../server/models/students";
const studentsUrl = '/api/students';
const studentUrl = '/api/student';

export default class API{


    //To get all students from the server
    static async getAllStudents() {
        const res = await axios.get(studentsUrl);
        return res.data;
    }
    //To get single student by ID
    static async getStudentByID(id) {
        const res = await axios.get(`${studentUrl}/${id}`);
        return res.data;
    }
    //To insert student into database
    static async addStudent(student) {
        const res = await axios.post(studentUrl, student);
        return res.data;
    }
    //To update student
    static async updateStudent(id, student) {
        const res = await axios.patch(`${studentUrl}/${id}`, student);
        return res.data;
    }
    //To delete a student 
    static async deleteStudent(id) {
        const res = await axios.delete(`${studentUrl}/${id}`);
        return res.data;
    }
}