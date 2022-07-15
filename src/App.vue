<script setup>
import Header from './Components/Header/header.vue';
import Profile from './Components/Profile.vue';
</script>

<script>

import AddQuestion from './components/AddQuestion.vue';
import QuestionCard from './components/QuestionCard.vue';

export default {
  components: {
    AddQuestion, QuestionCard
  },
  data() {
    return {
      //base cartas
      nextId: 3,
      notes: [{
        id: 1,
        Nombre: "¿Cómo hago para iterar un array con Vue?",
        Fechainicio: "Usa la directiva v-for",
        Fechafin: "12",
        Presupuesto:"13",
        Descripcion:"13",
      }, {
        id: 2,
        Nombre: "¿Cómo hago para relacionar una variable de estado con el campo <em>value</em>' de input?",
        Fechainicio: "Usa la directiva v-for",
        Fechafin: "12",
        Presupuesto:"13",
        Descripcion:"13",
      }]
    }
  },
  methods: {
    addNewNote(note) {
      this.notes.push({ id: this.nextId++, ...note });
      this.updateLocalStorage();
    },
    deleteNote(id) {
      this.notes = this.notes.filter(note => note.id != id);
      this.updateLocalStorage();
    },
    editNote(data) {
      const target = this.notes.find(note => note.id == data.id);

      target.question = data.newData.question;
      target.answer = data.newData.answer;

      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.notes = JSON.stringify(this.notes);
      localStorage.nextId = this.nextId;
    }
  },
  mounted() {
    if (localStorage.notes) {
      this.notes = JSON.parse(localStorage.notes);
    }
    if (localStorage.nextId) {
      this.nextId = localStorage.nextId;
    }
  }
}
</script>

<template>
  <header>
    <div class="">
     <Header></Header>
    </div>
  </header>
  <div class="">
      <div class="">
        <AddQuestion @newNote="(note) => addNewNote(note)" />
      </div>
    </div>

    <div class="" id="questions-list">
      <QuestionCard v-for="note in notes" :key="note.id" :note="note" :noteQuestion="note.question"
        @delete="(id) => deleteNote(id)" @edit="(data) => editNote(data)" />
    </div>
  

  
</template>

<style>
@import './assets/main.css';
</style>
