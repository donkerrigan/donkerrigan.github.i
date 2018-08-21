// Array of all images to be displayed
var theImages = [];
var portrait = [];
var landscape = [];
var nature = [];
var wildlife = [];

portrait[0] = "./photos/jeep_life.jpg";
portrait[1] = "./photos/floating.jpg";
portrait[2] = "./photos/reflection_bayou.jpg";
portrait[3] = "./photos/pumpkin.jpg";
portrait[4] = "./photos/pecan_orchard.jpg";
portrait[5] = "./photos/sunrise_girl.jpg";
portrait[6] = "./photos/fort.jpg";
portrait[7] = "./photos/bliss.jpg";
portrait[8] = "./photos/cool_beach.jpg";
portrait[9] = "./photos/cotton_field.jpg";
portrait[10] = "./photos/jeep_beach_girl.jpg";
portrait[11] = "./photos/love_latte.jpg";
portrait[12] = "./photos/pose.jpg";
portrait[13] = "./photos/pumpkin_portrait.jpg";
portrait[14] = "./photos/boardwalk.jpg";
portrait[15] = "./photos/coffee.jpg";
portrait[16] = "./photos/flower.jpg";
portrait[17] = "./photos/holiday.jpg";
portrait[18] = "./photos/swimsuit.jpg";
portrait[19] = "./photos/waterfall.jpg";
portrait[20] = "./photos/bike_coast.jpg";
portrait[21] = "./photos/bridge.jpg";
portrait[22] = "./photos/dragons_tooth.jpg";
portrait[23] = "./photos/head_light.jpg";
portrait[24] = "./photos/sand_beach.jpg";
portrait[25] = "./photos/sunrise_watcher.jpg";

landscape[0] = "./photos/over_boardwalk.jpg";
landscape[1] = "./photos/over_tarkiln.jpg";
landscape[2] = "./photos/over_orchard.jpg";
landscape[3] = "./photos/beach_shore.jpg";
landscape[4] = "./photos/smnp.jpg";
landscape[5] = "./photos/sound_side.jpg";
landscape[6] = "./photos/acadia_beehive.jpg";
landscape[7] = "./photos/dyce_head_light.jpg";
landscape[8] = "./photos/jordan_pond_bubble.jpg";
landscape[9] = "./photos/lobster_boats.jpg";
landscape[10] = "./photos/mcafee_knob.jpg";
landscape[11] = "./photos/reflect_rocks.jpg";
landscape[12] = "./photos/reflect_rocky_shore.jpg";
landscape[13] = "./photos/sunrise_reflection.jpg";
landscape[14] = "./photos/two_lights_sunrise.jpg";
landscape[15] = "./photos/two_lights_tide_pool.jpg";
landscape[16] = "./photos/wave_splash.jpg";

nature[0] = "./photos/elks_knob.jpg";
nature[1] = "./photos/large_oak.jpg";
nature[2] = "./photos/lightning_bolt.jpg";
nature[3] = "./photos/lightning_palm.jpg";
nature[4] = "./photos/moon_tree.jpg";
nature[5] = "./photos/misty_creek.jpg";
nature[6] = "./photos/nature_bridge.jpg";
nature[7] = "./photos/creek_ny.jpg";
nature[8] = "./photos/fern.jpg";
nature[9] = "./photos/jordan_pond_clear_water.jpg";
nature[10] = "./photos/jordan_pond_plant.jpg";
nature[11] = "./photos/jordan_pond_reflect.jpg";
nature[12] = "./photos/jordan_pond_rocks.jpg";
nature[13] = "./photos/mossy_creek.jpg";
nature[14] = "./photos/mossy_stump.jpg";
nature[15] = "./photos/rocky_shore.jpg";
nature[16] = "./photos/rocky_sunrise.jpg";
nature[17] = "./photos/seaweed_rocks.jpg";
nature[18] = "./photos/seaweed_sail.jpg";
nature[19] = "./photos/wave_sunset.jpg";

wildlife[0] = "./photos/hermit.jpg";
wildlife[1] = "./photos/hermit2.jpg";
wildlife[2] = "./photos/baby_elk.JPG";
wildlife[3] = "./photos/deer.JPG";
wildlife[4] = "./photos/dragonfly.JPG";
wildlife[5] = "./photos/elk.JPG";
wildlife[6] = "./photos/monkey.JPG";
wildlife[7] = "./photos/pelican.JPG";
wildlife[8] = "./photos/pelican2.JPG";
wildlife[9] = "./photos/pelican_flight.JPG";
wildlife[10] = "./photos/seagull.JPG";
wildlife[11] = "./photos/seal.JPG";

theImages[0] = "./photos/elks_knob.jpg";
theImages[1] = "./photos/floating.jpg";
theImages[2] = "./photos/fort.jpg";
theImages[3] = "./photos/jeep_life.jpg";
theImages[4] = "./photos/large_oak.jpg";
theImages[5] = "./photos/lightning_bolt.jpg";
theImages[6] = "./photos/lightning_palm.jpg";
theImages[7] = "./photos/misty_creek.jpg";
theImages[8] = "./photos/moon_tree.jpg";
theImages[9] = "./photos/nature_bridge.jpg";
theImages[10] = "./photos/over_boardwalk.jpg";
theImages[11] = "./photos/over_orchard.jpg";
theImages[12] = "./photos/over_tarkiln.jpg";
theImages[13] = "./photos/pecan_orchard.jpg";
theImages[14] = "./photos/pumpkin.jpg";
theImages[15] = "./photos/reflection_bayou.jpg";
theImages[16] = "./photos/smnp.jpg";
theImages[17] = "./photos/sunrise_girl.jpg";
theImages[18] = "./photos/umbrella.jpg";
theImages[19] = "./photos/hermit.jpg";
theImages[20] = "./photos/hermit2.jpg";
theImages[21] = "./photos/sound_side.jpg";

var p = theImages.length;
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
            currentPhotos = theImages;
    }
    for(q=0; q<5; q++){
        p = currentPhotos.length;
        var whichImage = Math.floor(Math.random()*(p-0));
        document.write('<img class="myImg" alt="" src="'+currentPhotos[whichImage]+'" style="width:100%;">');
        currentPhotos.splice(whichImage, 1);
    }
}