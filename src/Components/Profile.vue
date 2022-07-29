<<<<<<< HEAD
<script setup>
</script>

<template>
  <div class="profile">
    <div class="profileHeader">
        <img class="backHome" src="../../../public/Icons/arrow_forward_ios.svg" alt="Edit profile">
        <h2 class="whiteLetter">Profile</h2>
        <img class="editProfile" src="../../../public/Icons/edit.svg" alt="Go back">
    </div>
    <div class="iconAndUsername">
       <img class="userIcon" src="../../../public/Icons/perfil.svg" alt="userIcon">
        <h3 class="blackLetter">Username</h3>
    </div>

    <div class="mainUserInfo">
        <div class="userInfo">
            <h4 class="blackLetter">Nombre:</h4>
            <h4 class="blackLetter smallUserLetter">Admin Admin</h4>
            <h4 class="blackLetter">Correo electronico:</h4>
            <h4 class="blackLetter smallUserLetter">admin1232gmail.com</h4>
            <h4 class="blackLetter">Cambiar la contraseña:</h4>
            <h4 class="blackLetter smallUserLetter">***********</h4>
        </div>
        <div class="recentTrips">
             <h3 class="blackLetter recentTripsLetters">Viajes recientes</h3>
             <div class="recentTripCards">
                <div class="trip yellowTrip">
                    <p class="tripTittle">Barcelona</p>
                    <p class="tripInfo">Del 16 al 19 de Julio</p>
                    <p class="tripInfo">Presupuesto: 600€</p>
                </div>
                <div class="trip purpleTrip">
                    <p class="tripTittle">Barcelona</p>
                    <p class="tripInfo">Del 16 al 19 de Julio</p>
                    <p class="tripInfo">Presupuesto: 600€</p>
                </div>
             </div>
        </div>
    </div>
    
  </div>
</template>

<script>
    export default {
        name:"Profile"
    }
</script>

<style scoped>

.profileHeader{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
}

.mainUserInfo, .recentTripCards{
    display: flex;
    justify-content: space-around;
    gap: 1rem;    
}
.userInfo{
    margin-top:3rem;
}
.whiteLetter {
    display: inline;
    color: white;
    text-shadow: -2.5px 1px 1px black;
}

.backHome, .editProfile{ 
    padding-top: 2rem;
    width: 23.55px;
    height: auto;
    color:#1C1B1F;
}
.backHome{
    width: 20.55px;
    padding-left:2rem ;
}
.editProfile{
    padding-right:2rem;    
}

.blackLetter{
    font-weight: 700;
    display: flex;
    align-items: center;
    text-align: center;
}
.smallUserLetter{
    font-weight: 300;
}
.iconAndUsername>.blackLetter, .userIcon{
    display: block;
    margin-left: auto;
    margin-right: auto
}

.recentTripsLetters{    
    display: block;
}
.trip{
    width: 263.58px;   
    border-radius: 31px;
    filter: drop-shadow(5px 7px 2px #000000);
    margin: 20px;
    padding: 1rem;
    min-height: 302px;
    contain: content;
}
.yellowTrip{
    background-color: #FDE74C;
}
.purpleTrip{
    background-color: #C3BEF7;
}

.tripTittle{
    font-size: 24px;
    text-align: center;
}
.tripInfo{
    font-size: 16px;
}

@media (max-width: 915px){
    .mainUserInfo{
        display: block;
        align-items: center;
    }
    .userInfo{
        margin-top:0rem;
        display: flex;
        flex-direction: column;
        align-items: center;      
    }
    .userInfo > h4{
        margin-block-start: 0;
        margin-block-end: 0.5em;
    }
    .recentTripsLetters{
        margin-block-end: 1rem
    }
    .trip{
        margin-left:auto;
        margin-right:auto;
    }
}

@media (max-width: 700px){
    .recentTripCards{
        display: flex;
        flex-direction: column;        
    }    
}

=======
<script setup>
import TarjetaViajePerfilVue from "./TarjetaViajePerfil.vue";
</script>

<script>
import * as crud from "@/utils/axiosFunctions.js";

export default {
  data() {
    return {
      upcomingTrips: [],
    };
  },
  computed: {
    userData() {
      return this.$session.userData;
    }
  },
  created() {
    this.upcomingTrips = crud.getUpcomgingTripsFromUsuario(this.userData.id)
      .then(response => {
        console.log(response);
        if (response.data.status == 200) {
          this.upcomingTrips = response.data.data;
        }
      }).catch(error => crud.handleError(error))

  },
};
</script>

<template>
  <div v-if="userData" class="profile">
    <div class="profileHeader">
      <img class="backHome" src="/Icons/arrow_forward_ios.svg" alt="Edit profile" />
      <h2 class="whiteLetter">Perfil</h2>
      <img class="editProfile" src="/Icons/edit.svg" alt="Go back" />
    </div>
    <div class="iconAndUsername">
      <img class="userIcon"
        src="http://images6.fanpop.com/image/photos/40900000/Cardcaptor-Sakura-Clear-Card-cardcaptor-sakura-40955649-690-690.jpg"
        alt="userIcon" />
      <h3 class="blackLetter">
        ¡Hola,
        {{ userData.nombre + " " + userData.apellidos }}!
      </h3>
    </div>

    <div class="mainUserInfo">
      <div class="userInfo">
        <div>
          <h4 class="blackLetter userInfoTitle">Nombre:</h4>
          <p class="blackLetter smallUserLetter">
            {{ userData.nombre + " " + userData.apellidos }}
          </p>
        </div>
        <div>
          <h4 class="blackLetter userInfoTitle">Correo electrónico:</h4>
          <p class="blackLetter smallUserLetter">
            {{ userData.correo }}
          </p>
        </div>
        <router-link class="showAllTrips" to="/trips">Ver todos mis viajes</router-link>
      </div>
      <div class="recentTrips">
        <h3 class="blackLetter recentTripsLetters">Próximos viajes</h3>
        <div class="recentTripCards">
          <router-link v-for="travel in upcomingTrips" :key="travel.id" :to="`/trip/${travel.id}`">
            <TarjetaViajePerfilVue :viajeData=travel />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profileHeader {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.userIcon {
  height: 200px;
  border-radius: 50%;
  border: 3px solid #4f40f8a6;
}

.mainUserInfo,
.recentTripCards {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

.userInfo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: fit-content;
}

.userInfo>* {
  width: 100%;
}

.whiteLetter {
  display: inline;
  color: white;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.623), 0 0 5px rgb(105, 105, 105);
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 2rem;
}

.backHome,
.editProfile {
  padding-top: 2rem;
  width: 23.55px;
  height: auto;
  color: #1c1b1f;
}

.backHome {
  width: 20.55px;
  padding-left: 2rem;
}

.editProfile {
  padding-right: 2rem;
}

.blackLetter {
  font-weight: 700;
  display: flex;
  align-items: center;
  text-align: center;
}

.userInfoTitle {
  text-transform: uppercase;
  margin-top: 0;
}

.smallUserLetter {
  font-weight: 300;
}

.iconAndUsername>.blackLetter,
.userIcon {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.recentTripsLetters {
  display: block;
  text-transform: uppercase;
}

.trip {
  width: 263.58px;
  border-radius: 31px;
  filter: drop-shadow(5px 7px 2px #000000);
  margin: 20px;
  padding: 1rem;
  min-height: 302px;
  contain: content;
}

.yellowTrip {
  background-color: #fde74c;
}

.purpleTrip {
  background-color: #c3bef7;
}

.tripTittle {
  font-size: 24px;
  text-align: center;
}

.tripInfo {
  font-size: 16px;
}

.showAllTrips {
  text-decoration: underline;
}


@media (max-width: 915px) {
  .mainUserInfo {
    display: block;
    align-items: center;
  }

  .userInfo {
    margin-top: 0rem;
    margin: 2rem auto 4rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .userInfo>h4 {
    margin-block-start: 0;
    margin-block-end: 0.5em;
  }

  .recentTripsLetters {
    margin-block-end: 1rem;
  }

  .trip {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 700px) {
  .recentTripCards {
    display: flex;
    flex-direction: column;
  }
}
>>>>>>> origin/23-delete-modal
</style>