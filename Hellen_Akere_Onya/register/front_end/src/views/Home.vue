<template>
    <v-container>
        <v-row no-gutter>
            <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="8">
                <v-card class="pa-5">
                    <v-card-title>Student Registration Form</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
                    <v-text-field label="Surname" v-model ="student.surname" prepend-icon="mdi-note" :rules="rules"></v-text-field>
                    <v-text-field label="Given Name" v-model ="student.givenName" prepend-icon="mdi-note " :rules="rules"></v-text-field>
                    <v-text-field label="Date of Birth" v-model ="student.dateOfBirth" prepend-icon="mdi-note" :rules="rules"></v-text-field>
                    <v-text-field label="Residence" v-model ="student.residence" prepend-icon="mdi-note-plus" :rules="rules"></v-text-field>
                    <v-text-field label="Title" v-model ="student.title" prepend-icon="mdi-note" :rules="rules"></v-text-field>
                    <v-text-field label="Country" v-model ="student.country" prepend-icon="mdi-note" :rules="rules"></v-text-field>
                    <v-text-field label="Nationality" v-model ="student.nationality" prepend-icon="mdi-note" :rules="rules"></v-text-field>
                    <v-text-field label="Gender" v-model ="student.gender" prepend-icon="mdi-gender" :rules="rules"></v-text-field>
                    <v-file-input @change="selectFile" label="Student Photo" show-size counter multiple prepend-icon="mdi-image-plus" :rules="rules"></v-file-input>
                    <v-btn type="submit" class="mt-3" color="primary">Register</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import API from '../api';
export default {
    data() {
     return{
         rules: [(value)=>!!value || "This field is required"],
         student:{
             surname: "",
             givenName:"",
             dateOfBirth: "",
             residence: "",
             title:"",
             studentImage:"",
             nationality:"",
             gender:"",
             country:""
         },
         studentImage:"",
     };
    },
    methods:{
        selectFile(file){
            this.studentImage = file[0];
        },
        async submitForm(){
            const formData = new FormData();
            formData.append('studentImage', this.studentImage);
            formData.append('title', this.student.title);
            formData.append('surname', this.student.surname);
            formData.append('givenName', this.student.givenName);
            formData.append('dateOfBirth', this.student.dateOfBirth);
            formData.append('residence', this.student.residence);
            formData.append('nationality', this.student.nationality);
            formData.append('gender', this.student.gender);
            formData.append('country', this.student.country);

            if(this.$refs.form.validate()){
                const response = await API.addStudent(formData);
                this.$router.push({ name: 'Home', params: { message: response.message}});
            }
        },
    },
};
</script>