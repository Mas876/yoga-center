<template>

<v-container class="contact pa-0" fluid>
    
    

    <!-- Main content -->
    <v-container>
        <v-row cols="12" md="4">
          <v-card class="pa-4" color="#6a953c" flat to="/map">
            <h2 class="text-wrapper">Find us</h2>
            <address class="via-garibaldi pointer">
              Via Garibaldi 9, 20121 Milan, Italy<br />
              (Near Sempione Park, in the city center)
            </address>
          </v-card>
        </v-row>
        <v-row cols="12" md="4">
          <v-card class="pa-4" color="#6a953c" flat>
            <h2 class="text-wrapper">Contact info</h2>
            <p class="element-info">
              <a class="pointer" href="tel:+390212345678">+39 02 1234 5678</a><br />
              <a class="pointer"href="mailto:info@omyoga.com">info@omyoga.com</a>
            </p>
          </v-card>
        </v-row>
        <v-row cols="12" md="4">
          <v-card class="pa-4" color="#6a953c" flat>
            <h2 class="text-wrapper">Opening Hours</h2>
            <p class="monday-friday">
              Monday - Friday: 8:00 AM - 8:00 PM<br />
              Saturday: 9:00 AM - 3:00 PM
            </p>
          </v-card>
        </v-row>
      
    </v-container>

    
    
  </v-container>

  </template>

  <style scoped>

.pointer {
  cursor: pointer;
}

.contact {
  background-color: #6a953c;;
}

.component {
  position: sticky;
  top: 0;
  z-index: 100;
}

.text-wrapper {
  font-family: "Open Sans", Helvetica;
  font-weight: 400;
  font-size: 30px;
  color: #ffffff;
}

.via-garibaldi,
.element-info,
.monday-friday,
.om-yoga-centre-via {
  font-family: "Open Sans", Helvetica;
  font-size: 20px;
  color: #ffffff;
}
</style>