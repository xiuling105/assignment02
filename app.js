var score = 0;
const result = [
	"Your score is higher than 75%. Congratulations!! You are smart!",
	"Your score is between 40% to 65%. You are normal person ;) ",
	"Your score is lower than 35%. You may have not noticed by you are pretty much dumb. Haha!"
]

const questions = [

	{
		problem: "1. What is 10 divided by 1?",
		images: "images/q-1.jpg",
		option: [
			"A: 1",
			"B: 5",
			"C: 10"
		],
		answer: "2"
	},
	{
		problem: "2. What is the car's parking spot number?",
		images: "images/q-2.jpg",
		option: [
			"A: 68",
			"B: 86",
			"C: 87"
		],
		answer: "2"
	},
	{
		problem: "3. How many different months have exactly 31 days in 2018?",
		images: "images/q-3.png",
		option: [
			"A: 6",
			"B: 7",
			"C: 4"
		],
		answer: "1"
	},
	{
		problem: "4. Solve the math problem",
		images: "images/q-4.jpg",
		option: [
			"A: 13",
			"B: 14",
			"C: 16"
		],
		answer: "0"
	},
	{
		problem: "5. Who was the first president of the United States?",
		images: "images/q-5.jpg",
		option: [
			"A: Abraham Lincoln",
			"B: Ben Franklin",
			"C: George Washington"
		],
		answer: "2"
	},
	{
		problem: "6. What is the square root of 4?",
		images: "images/q-6.jpg",
		option: [
			"A: 1",
			"B: 2",
			"C: 4"
		],
		answer: "1"
	},
	{
		problem: "7. Which is the tallest building in the world?",
		images: "images/q-7.jpg",
		option: [
			"A: Shanghai Tower ",
			"B: Burj Khalifa",
			"C: One World Trade Center"
		],
		answer: "1"
	},
	{
		problem: "8. Which planet is the smallest in our Solar System?",
		images: "images/q-8.png",
		option: [
			"A: Mercury",
			"B: Pluto",
			"C: Neptune"
		],
		answer: "0"
	},
	{
		problem: "9. Let's see if you can you solve this!",
		images: "images/q-9.jpg",
		option: [
			"A: 14",
			"B: 16",
			"C: 26 "
		],
		answer: "1"
	},
	{
		problem: "10. How many states are there in the United States?",
		images: "images/q-10.jpg",
		option: [
			"A: 48",
			"B: 50",
			"C: 52"
		],
		answer: "1"
	}
];

//  Display whole container

const container = document.getElementById('container');

for (let i = 0; i < questions.length; i++) {
     
	const slide = document.createElement('div');
	      slide.classList.add("question");
	      slide.id = i;
	      if (i==0){ slide.style.display="block";}
	      
//  Display questions
	
	const problem = document.createElement('p');
	      problem.classList.add("problem");
		  problem.textContent = questions[i].problem;
	      slide.appendChild(problem);

//	Display image
	
	const image = new Image();
	      image.classList.add('picture');
	   	  image.src = questions[i].images;
	      slide.appendChild(image);

//   Display choice
	
	     console.log(questions[i].option);
	     
	      for (let key in questions[i].option) {
     		      let option = questions[i].option[key];
			 		 
	const options = document.createElement('button');
		  options.classList.add('option');
		  options.textContent = option;
	      options.onclick = function () { 
			  if(  key == questions[i].answer){
					console.log(score += 10);
				 											 }
			  else{
					console.log(score += 0);
				 }
     		}
		 
		slide.appendChild(options);
			 
	}
		
//	Display next button
	
   var next = document.createElement('button');
	     next.classList.add('next');
	     next.textContent =('next');
	
         next.onclick = function () {
		     if (i < 9)  {
		           slide.style.display = "none";
	               document.getElementById(i+1).style.display="block";
     		}   
		    else {
				 
				  solution.onclick ();
			}
    }
        slide.appendChild(next);
	
//	calculate the score
	
	const solution = document.createElement('p');
	const answer = document.getElementById("answer");
	var img = new Image();
	img.classList.add('img');
	
	      solution.onclick = function () {
		  slide.style.display = "none";
		  document.getElementById('answer').style.display = "block";
           
			  if (score > 80 && score <120 ) {
				 
				  answer.textContent = result[0];
				
				  img.src = "images/clap.png";
				  document.body.appendChild(img);
				  }
				  else if (score > 40 && score < 80) {
				  answer.textContent = result[1];
					
				  img.src = "images/thumbs.png";
				  document.body.appendChild(img);
			  }
			  else  {
				   answer.textContent = result[2];
				
				  img.src = "images/dumb.jpg";
				  document.body.appendChild(img);
			  }
		  
		  }
		  
	
		  slide.appendChild(solution);
	      
	
	container.appendChild(slide);
		
}

