<template>
    <div class="form-container">
      <h2>Halaman Daftar</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="alamat">Alamat Lengkap:</label>
          <input type="text" id="alamat" v-model="alamat" required />
        </div>
        <div class="form-group">
          <label for="telepon">No. Telepon:</label>
          <input type="tel" id="telepon" v-model="telepon" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="passwordUlang">Password Ulang:</label>
          <input type="password" id="passwordUlang" v-model="passwordUlang" required />
        </div>
        <button type="submit">Daftar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HalamanDaftar',
    data() {
      return {
        email: '',
        alamat: '',
        telepon: '',
        password: '',
        passwordUlang: ''
      };
    },
    methods: {
      handleSubmit() {
        if (this.password !== this.passwordUlang) {
          alert('Password dan Password Ulang tidak sama');
          return;
        }
        alert(`Email: ${this.email}\nAlamat: ${this.alamat}\nTelepon: ${this.telepon}`);
        // Logika pendaftaran bisa ditambahkan di sini, seperti mengirim data ke server
      }
    }
  };
  </script>
  
  <style scoped>
  .form-container {
    max-width: 1000px; /* Lebarkan sedikit tampilan */
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }
  h2 {
    color: #42b983;
    text-align: center;
    margin-bottom: 20px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin-bottom: 5px;
    color: #333;
  }
  input {
    width: calc(100% - 20px);
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  button {
    width: 100%;
    padding: 10px 0;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #369f6d;
  }
  </style>
  