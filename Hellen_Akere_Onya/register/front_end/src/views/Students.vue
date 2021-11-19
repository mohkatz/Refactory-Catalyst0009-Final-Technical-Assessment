<template v-for="student in students" :key="student._id" :items="students">
  <v-container>
    <v-card>


      <v-data-table
         :headers="headers"
        :items="students"
        :search="search"
      >
        <template v-slot:top>
          <v-toolbar text>
            <v-toolbar-title>Students</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>


          </v-toolbar>
        </template>

      </v-data-table>
    </v-card>
  </v-container>
</template>
<script>
import API from '../api';
export default {
  data() {
    return {
      search: '',
            headers: [
        {
          text: 'Surname',
          align: 'start',
          sortable: true,
          value: 'surname',
        },
        { text: 'Given Name', value: 'givenName' },
        { text: 'Date of Birth', value: 'dateOfBirth' },
        { text: 'Residence', value: 'residence' },
        { text: 'Country', value: 'country' },
        { text: 'Title', value: 'title' },
        { text: 'Nationality', value: 'nationality' },
        { text: 'Gender', value: 'gender' },
      ],
      students: [],
    };
  },

  async created() {
    this.students = await API.getAllStudents();
  },
};
</script>
