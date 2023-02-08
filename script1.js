function weatherdata(){
    var cityname=document.getElementById("a").value;
    var wdata=fetch("https://api.openweathermap.org/data/2.5/forecast?q="+cityname+"&appid=5d9562b12af00f9c021fd73e1a664723&units=metric");
    wdata.then((result)=>{
        result.json().then((data)=>{
            console.log(data);
             let a=data.list;
             var temperature=[],date=[];
             let j=0;
             for(i=0;i<a.length;i=i+8)
             {
            //    temp0[j]=a[i].main.temp;
            //    temp1=a[i].dt_txt.split(' ');
            //    date[i]=temp1[0];
            //    j++;
            //    console.log(date);
                let {dt_txt, main:{temp}} = a[i]
                date.push(dt_txt.slice(1,10))
                temperature.push(temp)
                
            }
            let co=data.city.country;
            document.getElementById("mul").innerHTML="Mintemp="+Math.min(...temperature)+"<br>"+"Maxtemp="+Math.max(...temperature)+"<br>"+"Country="+co;
            barchart(temperature,date);
    })
    })
}
function barchart(temp0,date){
    
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: date,
        datasets: [{
          label: '# of Votes',
          data: temp0,
          borderWidth: 1
        }]
      },
    });
}

    
