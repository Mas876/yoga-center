<!--This is the header of the website-->
<template>
  <!-- LOgo of the yoga center -->
        <v-toolbar color="#6a953c" >
          <v-img src="images/logo.jpeg" alt="OmYoga Logo"max-height="100" max-width="150"></v-img>
      <!--<v-toolbar-title>OM YOGA</v-toolbar-title>-->
    </v-toolbar>

  <v-spacer></v-spacer>
  <!-- Toolbar -->
   <v-container>
      <v-row justify="center" align="center" no-gutters >
        <v-btn variant="text" to="/home" style="background-color: white;">Home</v-btn>
        <v-btn variant="text" to="/activities" style="background-color: white;">Activities</v-btn>
        <v-btn variant="text" to="/teachers" style="background-color: white;">Teachers</v-btn>
        <v-btn variant="text" to="/highlights" style="background-color: white;">Highlights</v-btn>
        <v-btn variant="text" to="/about" style="background-color: white;">About us</v-btn>
        <v-btn variant="text" to="/contacts" style="background-color: white;">Contact</v-btn>
      </v-row>
    </v-container>
    
    
</template>

 <style scoped>

.pointer {
  cursor: pointer;
}
</style>