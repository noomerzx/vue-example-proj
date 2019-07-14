<template>
  <div>
    <h1>Gallerry Main</h1>
    <router-link :to="{ name: 'gallerry-detail', params: { id: 1 }}">A</router-link>
    <router-link :to="{ name: 'gallerry-detail', params: { id: 2 }}">B</router-link>
    <router-view></router-view>
  </div>
</template>
