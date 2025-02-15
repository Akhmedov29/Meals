fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
.then(abc=>abc.json())
.then(data => {
    console.log(data.meals)
    data.meals.forEach( meal => {
        let box = document.querySelector('.box')
        box.innerHTML += `
        <div class="row">
    <div class="col ">
      <div class="card">
        <div class="card-image">
          <img src=${meal.strMealThumb}>
          <span class="card-title" style="color:aqua;"></span>
        </div>
        <div class="card-content">
          <p style="width:200px; height:60px;">${meal.strMeal}</p>
        </div>
        <div class="card-action">
          <a href="${meal.strYoutube}" target="_blank">Watch reciept</a>
        </div>
      </div>
    </div>
  </div>
        `
    })
    
})