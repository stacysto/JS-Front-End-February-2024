function solve(speed, zone){
let motorwaySpeed = 130;
let interstateSpeed = 90;
let citySpeed = 50;
let residentialAreaSpeed = 20;
let output;
let difference = 0;
let status ='';
switch(zone){
    case 'motorway':
        if (speed<=130){
            output = (`Driving ${speed} km/h in a ${motorwaySpeed} zone`);
        }else{
        difference = speed - motorwaySpeed; 
        if(difference<=20 && difference>=1){
            status = 'speeding';
        }else if(difference>20 && difference<=40){
            status = 'excessive speeding';
        }else{
            status = 'reckless driving';
        }
            output = (`The speed is ${difference} km/h faster than the allowed speed of ${motorwaySpeed} - ${status}`);
        }
        break;
        case 'interstate':
            if (speed<=90){
                output = (`Driving ${speed} km/h in a ${interstateSpeed} zone`);
            }else{
            difference = speed - interstateSpeed; 
            if(difference<=20 && difference>=1){
                status = 'speeding';
            }else if(difference>20 && difference<=40){
                status = 'excessive speeding';
            }else{
                status = 'reckless driving';
            }
                output = (`The speed is ${difference} km/h faster than the allowed speed of ${interstateSpeed} - ${status}`);
            }
            break;
            case 'city':
                if (speed<=50){
                    output = (`Driving ${speed} km/h in a ${citySpeed} zone`);
                }else{
                difference = speed - citySpeed; 
                if(difference<=20 && difference>=1){
                    status = 'speeding';
                }else if(difference>20 && difference<=40){
                    status = 'excessive speeding';
                }else{
                    status = 'reckless driving';
                }
                    output = (`The speed is ${difference} km/h faster than the allowed speed of ${citySpeed} - ${status}`);
                }
                break;
                case 'residential':
                    if (speed<=20){
                        output = (`Driving ${speed} km/h in a ${residentialAreaSpeed} zone`);
                    }else{
                    difference = speed - residentialAreaSpeed; 
                    if(difference<=20 && difference>=1){
                        status = 'speeding';
                    }else if(difference>20 && difference<=40){
                        status = 'excessive speeding';
                    }else{
                        status = 'reckless driving';
                    }
                        output = (`The speed is ${difference} km/h faster than the allowed speed of ${residentialAreaSpeed} - ${status}`);
                    }
                    break;
}

console.log(output);
}
solve(21, 'residential');




