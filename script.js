var myChart = document.getElementById('myChart').getContext('2d'); 
			var BrandstofChart = new Chart(myChart, {
				type:'pie', //type visual
				data:{
					labels:['Brandstof in liter', 'Leeg'],
					datasets:[{
						label:'Brandstof',
						data:[
							490000,
							10000,
						],
						backgroundColor:[
							'rgb(241, 56, 62)',
							'rgb(255, 255, 255)'
						]
					}]
				},
				options:{
					title:{
						display:true,
                        text:'Brandstof inhoud'
					}
				}
			}); 
var myChart2 = document.getElementById('myChart2').getContext('2d'); 
			var VoedselChart = new Chart(myChart2, {
				type:'doughnut', //type visual
				data:{
					labels:['Voedsel in kg', 'Leeg'],
					datasets:[{
						label:'Voedsel',
						data:[
							1400,
							600,
						],
						backgroundColor:[
							'rgb(0, 205, 176)',
							'rgb(255, 2555, 255)'
						]
					}]
				},
				options:{
					title:{
						display:true,
						text:'Voedselvoorraad'
					}
				}
			}); 
var myChart3 = document.getElementById('myChart3').getContext('2d'); 
			var WaterChart = new Chart(myChart3, {
				type:'doughnut', //type visual
				data:{
					labels:['Water in liter', 'Leeg'],
					datasets:[{
						label:'Water',
						data:[
							1800,
							200,
						],
						backgroundColor:[
							'rgb(1, 175, 228)',
							'rgb(255, 255, 255)'
						]
					}]
				},
				options:{
					title:{
						display:true,
						text:'Watervoorraad'
					}
				}
			}); 
var myChart4 = document.getElementById('myChart4').getContext('2d'); 
			var AcceleratieChart = new Chart(myChart4, {
				type:'line', //type visual
				data:{
					labels:['0', '100', '200', '300', '400', '500', '600'],
					datasets:[{
						label:'Acceleratie in seconden per meter',
						data:[
							10,
							22,
							0,
							10,
							15,
							3,
							0,
						],
						backgroundColor:[
							'rgb(11, 125, 154)',
							'rgb(255, 255, 255)'
						]
					}]
				},
				options:{
					title:{
						display:true,
						text:'Acceleratie'
					}
				}
			}); 