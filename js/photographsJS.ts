// Array of all images to be displayed
let theImages: string[] = [];
let portrait: string[] = [];
let landscape: string[] = [];
let nature: string[] = [];
let wildlife: string[] = [];

portrait.push("./photos/portrait/jeep_life.jpg");
portrait.push("./photos/portrait/floating.jpg");
portrait.push("./photos/portrait/reflection_bayou.jpg");
portrait.push("./photos/portrait/pumpkin.jpg");
portrait.push("./photos/portrait/pecan_orchard.jpg");
portrait.push("./photos/portrait/sunrise_girl.jpg");
portrait.push("./photos/portrait/fort.jpg");
portrait.push("./photos/portrait/bliss.jpg");
portrait.push("./photos/portrait/cool_beach.jpg");
portrait.push("./photos/portrait/cotton_field.jpg");
portrait.push("./photos/portrait/jeep_beach_girl.jpg");
portrait.push("./photos/portrait/love_latte.jpg");
portrait.push("./photos/portrait/pose.jpg");
portrait.push("./photos/portrait/pumpkin_portrait.jpg");
portrait.push("./photos/portrait/boardwalk.jpg");
portrait.push("./photos/portrait/coffee.jpg");
portrait.push("./photos/portrait/flower.jpg");
portrait.push("./photos/portrait/holiday.jpg");
portrait.push("./photos/portrait/swimsuit.jpg");
portrait.push("./photos/portrait/waterfall.jpg");
portrait.push("./photos/portrait/bike_coast.jpg");
portrait.push("./photos/portrait/bridge.jpg");
portrait.push("./photos/portrait/dragons_tooth.jpg");
portrait.push("./photos/portrait/head_light.jpg");
portrait.push("./photos/portrait/sand_beach.jpg");
portrait.push("./photos/portrait/sunrise_watcher.jpg");

landscape.push("./photos/landscape/over_boardwalk.jpg");
landscape.push("./photos/landscape/over_tarkiln.jpg");
landscape.push("./photos/landscape/over_orchard.jpg");
landscape.push("./photos/landscape/beach_shore.jpg");
landscape.push("./photos/landscape/smnp.jpg");
landscape.push("./photos/landscape/sound_side.jpg");
landscape.push("./photos/landscape/acadia_beehive.jpg");
landscape.push("./photos/landscape/dyce_head_light.jpg");
landscape.push("./photos/landscape/jordan_pond_bubble.jpg");
landscape.push("./photos/landscape/lobster_boats.jpg");
landscape.push("./photos/landscape/mcafee_knob.jpg");
landscape.push("./photos/landscape/reflect_rocks.jpg");
landscape.push("./photos/landscape/reflect_rocky_shore.jpg");
landscape.push("./photos/landscape/sunrise_reflection.jpg");
landscape.push("./photos/landscape/two_lights_sunrise.jpg");
landscape.push("./photos/landscape/two_lights_tide_pool.jpg");
landscape.push("./photos/landscape/wave_splash.jpg");

nature.push("./photos/nature/elks_knob.jpg");
nature.push("./photos/nature/large_oak.jpg");
nature.push("./photos/nature/lightning_bolt.jpg");
nature.push("./photos/nature/lightning_palm.jpg");
nature.push("./photos/nature/moon_tree.jpg");
nature.push("./photos/nature/misty_creek.jpg");
nature.push("./photos/nature/nature_bridge.jpg");
nature.push("./photos/nature/creek_ny.jpg");
nature.push("./photos/nature/fern.jpg");
nature.push("./photos/nature/jordan_pond_clear_water.jpg");
nature.push("./photos/nature/jordan_pond_plant.jpg");
nature.push("./photos/nature/jordan_pond_reflect.jpg");
nature.push("./photos/nature/jordan_pond_rocks.jpg");
nature.push("./photos/nature/mossy_creek.jpg");
nature.push("./photos/nature/mossy_stump.jpg");
nature.push("./photos/nature/rocky_shore.jpg");
nature.push("./photos/nature/rocky_sunrise.jpg");
nature.push("./photos/nature/seaweed_rocks.jpg");
nature.push("./photos/nature/seaweed_sail.jpg");
nature.push("./photos/nature/wave_sunset.jpg");

wildlife.push("./photos/wildlife/hermit.jpg");
wildlife.push("./photos/wildlife/hermit2.jpg");
wildlife.push("./photos/wildlife/baby_elk.JPG");
wildlife.push("./photos/wildlife/deer.JPG");
wildlife.push("./photos/wildlife/dragonfly.JPG");
wildlife.push("./photos/wildlife/elk.JPG");
wildlife.push("./photos/wildlife/monkey.JPG");
wildlife.push("./photos/wildlife/pelican.JPG");
wildlife.push("./photos/wildlife/pelican2.JPG");
wildlife.push("./photos/wildlife/pelican_flight.JPG");
wildlife.push( "./photos/wildlife/seagull.JPG");
wildlife.push( "./photos/wildlife/seal.JPG");

theImages.push("./photos/umbrella.jpg");

var p: number = theImages.length;
function showImage(type){
    var currentPhotos = [];
    switch(type){
        case "nature":
            currentPhotos = nature;
            break;
        case "landscape":
            currentPhotos = landscape;
            break;
        case "portrait":
            currentPhotos = portrait;
            break;
        case "wildlife":
            currentPhotos = wildlife;
             break;
        default:
            currentPhotos = nature;
    }
    for(let q: number = 0; q < 5; q++){
        p = currentPhotos.length;
        const whichImage: number = Math.floor(Math.random()*(p-0));
        document.write('<img class="myImg" alt="" src="' + currentPhotos[whichImage] + '" style="width:100%;">');
        currentPhotos.splice(whichImage, 1);
    }
}