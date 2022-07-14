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

</style>