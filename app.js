const images = [
	"images/q-1.png", 
	"images/q-2.jpg", 
	"images/q-3.jpg", 
	"images/q-4.jpg",
	"images/q-5.jpg",
	"images/q-6.jpg",
	"images/q-7.jpg",
	"images/q-8.png",
	"images/q-9.jpg",
	"images/q-10.jpg"
];

const questions = [

	{
	    problem: "1. What is 10 divided by 1?",
	    option:{A:1,    B:5,    C:10},
	    answer:''
	},
	{
	    problem: "2. what is the car parking number?",
	    option:{A:68,    B:86,    C:87},
	    answer:''
	},
	{
		problem: "3.How many different months have exactly 31 days in 2016?",
	    option:{A:6,    B:7,    C:4},
	    answer:''
	},
	{
		problem: "4.Have you ever dropped your phone onto your face while you were problem: looking at it in bed?",
	    option:{A:'',    B:'',    C:''},
	    answer:''
	},
	{
		problem: "5. Who was the first president of the United States?",
	    option:{A:'',    B:'',    C:''},
	    answer:''
	},
	{
		problem: "6. What is the square root of 4?",
	    option:{A:'',    B:'',    C:''},
	    answer:''
	},
	{
		problem: "7. The ________ of this injury was prevent him from competing any further.",
	    option:{A:'',    B:'',    C:''},
	    answer:''
	},
	{
		problem: "8. Which planet is the smallest in our Solar System?",
	    option:{A:'',    B:'',    C:''},
	    answer:''
	},
	{
		problem: "9. Is there a color black?",
	    option:{A:'',    B:'',    C:''},
	    answer:''
	},
	{
		problem: "10. As of 2017, the largest pyramid in existence can be found in Egypt.",
	    option:{A:'',    B:'',    C:''},
	    answer:''
	}
];




//Show the questions and images

const container = document.getElementById("container");

for (let i = 0; i < images.length; i++) {
	
	const imgContainer = document.createElement('div');
	
	const problems = document.createElement('p');
	problems.classList.add("problem");
	problems.textContent = questions[i].problem;
	imgContainer.appendChild(problems);
		
	const img = new Image();
	img.src = images[i];
	img.id = "img"+i;
	img.classList.add("slide");
	imgContainer.appendChild(img);
    
	console.log(questions[i].option);
    for (let key in questions[i].option) {
        let option = questions[i].option[key];
	   const options = document.createElement('button');
	   options.classList.add("option");
	   options.textContent = option;
        options.onclick = function() {
            console.log(key);
            console.log(option);
            console.log(this);
        };
        imgContainer.appendChild(options);
    }
	
    

	container.appendChild(imgContainer);
	
}