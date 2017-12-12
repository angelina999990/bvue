<template>
  <!-- <b-navbar toggleable="md" type="dark" variant="primary">
    <b-navbar-toggle target="nav_collapse" ></b-navbar-toggle>
    <b-navbar-brand href="#">APPLICATION PORTAL</b-navbar-brand>
    <b-collapse is-nav id="nav-collapse">
      <b-navbar-nav>
        <b-nav-item v-for="tab in tabs">{{ tab }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar> -->
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
  <!-- <v-toolbar class="white pl-5 pr-5" light>
    <v-avatar :tile="true" size="30px">
      <img src="../assets/logo.png" alt="avatar">
    </v-avatar>
    <v-toolbar-title class="body-2">APPLICATION PORTAL</v-toolbar-title>
    <v-tabs :scrollable="false" class="header-tabs" fixed centered>
      <v-tabs-bar light>
        <v-tabs-slider color="deep-purple"></v-tabs-slider>
        <v-tabs-item
          v-for="tab in tabs"
          :key="tab"
          :href="'#' + tab"
          ripple
        >
          {{ tab }}
        </v-tabs-item>
      </v-tabs-bar>
    </v-tabs>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <div slot="activator">
        <v-avatar :size="'40px'" class="grey lighten-4 mr-3">
          <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="avatar">
        </v-avatar>
        John Leider
        <v-icon>arrow_drop_down</v-icon>
      </div>
      <v-list>
        <v-list-tile v-for="n in 3" :key="n" @click="">
          <v-list-tile-title>{{ n }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar> -->
</template>

<script>
export default {
  name: 'appHeader',

  data () {
    return {
      tabs: ['APPLICATIONS', 'PROCEDURE', 'CONTACT US']
    }
  }
}
</script>

<style>
</style>
