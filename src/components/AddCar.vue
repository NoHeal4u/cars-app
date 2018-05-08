<template>
  <div>
    
  AddCar

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"> 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

<form>
  <div class="form-group row">
    <label for="text" class="col-4 col-form-label">Model</label> 
    <div class="col-8">
      <div class="input-group">
        <div class="input-group-addon">
          <i class="fa fa-address-card"></i>
        </div> 
        <input <input v-model = "newCar.model" class="form-control here" type="text" placeholder = "Model">
      </div>
    </div>
  </div>
  <div class="form-group row">
    <label for="text1" class="col-4 col-form-label">Brand</label> 
    <div class="col-8">
      <input <input v-model = "newCar.brand" class="form-control here" type="text" placeholder = "Brand">
    </div>
  </div>
  <div class="form-group row">
    <label for="select" class="col-4 col-form-label">Year</label> 
    <div class="col-8">
      <select v-model="newCar.year" class="custom-select">
        <option value="1990">1990</option>
        <option value="2018">2018</option>
      </select>
    </div>
  </div>
  <div class="form-group row">
    <label for="text2" class="col-4 col-form-label">maxSpeed</label> 
    <div class="col-8">
      <input v-model="newCar.maxSpeed" class="form-control here" type="number">
    </div>
  </div>
  <div class="form-group row">
    <label for="text3" class="col-4 col-form-label">numberOfDoors</label> 
    <div class="col-8">
      <input v-model="newCar.numberOfDoors" class="form-control here" type="number">
    </div>
  </div>
  <div class="form-group row">
    <label class="col-4">isAutomatic</label> 
    <div class="col-8">
      <label class="custom-control custom-checkbox">
        <input v-model="newCar.isAutomatic" name="checkbox" class="custom-control-input" value="true" required="required" type="checkbox"> 
        <span class="custom-control-indicator"></span> 
        <span class="custom-control-description">Automatic</span>
      </label>
      <label class="custom-control custom-checkbox">
        <input  name="checkbox" class="custom-control-input" value="false" required="required" type="checkbox"> 
        <span class="custom-control-indicator"></span> 
        <span class="custom-control-description">Manual</span>
      </label>
    </div>
  </div>
  <div class="form-group row">
    <label class="col-4">Engine</label> 
    <div class="col-8">
      <label class="custom-control custom-radio">
        <input v-model="newCar.engine" name="radio" class="custom-control-input" value="diesel" required="required" type="radio"> 
        <span class="custom-control-indicator"></span> 
        <span class="custom-control-description">diesel</span>
      </label>
      <label class="custom-control custom-radio">
        <input v-model="newCar.engine" name="radio" class="custom-control-input" value="petrol" required="required" type="radio"> 
        <span class="custom-control-indicator"></span> 
        <span class="custom-control-description">petrol</span>
      </label>
      <label class="custom-control custom-radio">
        <input v-model="newCar.engine" name="radio" class="custom-control-input" value="electric" required="required" type="radio"> 
        <span class="custom-control-indicator"></span> 
        <span class="custom-control-description">electric</span>
      </label>
      <label class="custom-control custom-radio">
        <input v-model="newCar.engine" name="radio" required="required" class="custom-control-input" value="hybrid" type="radio"> 
        <span class="custom-control-indicator"></span> 
        <span class="custom-control-description">hybrid</span>
      </label>
    </div>
  </div> 
  <div class="form-group row">
    <div class="offset-4 col-8">
      <button name="submit" type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>

  </div>
</template>

<script>

import { cars } from '../services/CarsService'

export default {
  
  data() {

  	return { newCar:{
  		 brand: '',
  		 model: '',
  		 year: '',
  		 maxSpeed: '',
  		 numberOfDoors: '',
  		 isAutomatic: '',
  		 engine: '',

  	}

  }

},

  methods : {
  	addCar(){

  	}
  }


}

</script>

<style>

</style>

<!-- brand i model se unose pomoću text input-a
year se unosi preko select box-a, u kome su prikazane godine 1990- 2018
maxSpeed i numberOfDoors se unose pomoću number input-a
isAutomatic se obeležava preko checkbox-a
engine realizovati preko radio button-a. Opcije su `diesel`, `petrol`, `electric`, `hybrid` -->
