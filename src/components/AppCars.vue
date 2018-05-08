<template>
  <div>
  App cars

<div class="card" style="width: 18rem;" v-for="car in cars">
 
  <div class="card-body">
    <h5 class="card-title">Model:{{ car.model }}</h5>
    <p class="card-text">Brand:{{ car.brand }}</p>
    <p class="card-text">Engine type:{{ car.engine }}</p>
    <p class="card-text">Max speed:{{ car.maxSpeed }}</p>
    <p class="card-text">NumOfDoors:{{ car.numberOfDoors }}</p>
    <p class="card-text">Year:{{ car.year }}</p>
    
  </div>
</div>

  <!-- <ul>
  
  <li v-for="car in cars">
    {{ car.brand }}
    {{ car.engine }}
    {{ car.maxSpeed }}
    {{ car.model }}
    {{ car.numberOfDoors }}
    {{ car.year }}
  </li>
</ul> -->

  </div>
</template>

<script>


import { cars } from '../services/CarsService'

	export default {

		created(){
    		cars.getAll()
    		.then((response)=>{
    			this.cars = response.data
    			console.log(this.cars)
    		}).catch((error)=>{
    			console.log(error)
    		})
  		},

		data() {

			return {

				cars: []
				
				
			}
		}

		

	}
</script>
	
<style>

</style>