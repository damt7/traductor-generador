console.log("'Allo 'Allo!"),angular.module("app",[]).controller("coffeeController",["$scope","$timeout",function(a,b){a.disableOption=!1,a.disableMoney=!0,a.selectedOption=null,a.count=0,a.options=[{name:"Cafe",value:1200,selected:!1},{name:"Cappucino",value:2500,selected:!1},{name:"Moka",value:2e3,selected:!1},{name:"Cafe+Leche",value:1800,selected:!1},{name:"Expresso",value:2100,selected:!1},{name:"Americano",value:2400,selected:!1}],a.display="Elija una opcion de cafe..",a.devuelta="",a.selectOption=function(c){a.disableOption=!0,a.display="Usted ha elegido la opcion: "+c,angular.forEach(a.options,function(b,d){b.name==c&&(a.selectedOption=b,console.log("TR"))}),b(function(){a.display="Ingrese su dinero..",a.disableMoney=!1},2500)},a.cancel=function(){a.count>0&&(a.devuelta="Retire su dinero: "+a.count),a.display="Cancelando operacion..",b(function(){a.reset()},2500)},a.reset=function(){a.display="Elija una opcion de cafe..",a.devuelta="",a.disableOption=!1,a.count=0,a.selectedOption=null},a.selectMoney=function(c){a.count+=c,a.count<a.selectedOption.value?a.display="Su saldo es: "+a.count+"$, faltan: "+(a.selectedOption.value-a.count)+"$":(a.display="Disfrute su cafe.. ",a.devuelta="Devuelta: "+(a.count-a.selectedOption.value)+"$",a.disableMoney=!0,b(function(){a.reset()},2500))}}]);