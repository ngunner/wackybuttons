//we can hard code these variables right in this file
//another option could be to ajax in the variables from another source on the server

var productoption = [];
productoption[0] = '<option value="Standard Pin Back">Standard Pin Back</option>';
productoption[1] = '<option value="Refrigerator Magnet">Refrigerator Magnet</option>';
productoption[2] = '<option value="Clothing Magnet">Clothing Magnet</option>';
productoption[3] = '<option value="Bottle Opener">Bottle Opener</option>';
productoption[4] = '<option value="Mirror">Mirror Back</option>';
productoption[5] = '<option value="Clip Back">Clip Back</option>';
productoption[6] = '<option value="Nothing">Nothing on Back</option>';

var allproductoption = [];
allproductoption[0] = '<option value="Standard Pin Back">Standard Pin Back</option>';
allproductoption[1] = '<option value="Refrigerator Magnet">Refrigerator Magnet</option>';
allproductoption[2] = '<option value="Clothing Magnet">Clothing Magnet</option>';
allproductoption[3] = '<option value="Keychain">Keychain</option>';
allproductoption[4] = '<option value="Bottle Opener">Bottle Opener</option>';
allproductoption[5] = '<option value="Mirror">Mirror Back</option>';
allproductoption[6] = '<option value="Clip Back">Clip Back</option>';
allproductoption[7] = '<option value="Nothing">Nothing on Back</option>';

//all size options available
var sizeoption = [];
sizeoption[0] = '<option value="1 inch round button with locking pin back">1 inch - Standard Pin Back</option>';
sizeoption[1] = '<option value="1 inch round button with magnet back">1 inch - Fridge Magnet Back</option>';
sizeoption[2] = '<option value="1 inch round button with nothing on back">1 inch - Nothing on Back</option>';
sizeoption[3] = '<option value="1-1/2 inch round button with locking pin back">1.5 inch - Standard Pin Back</option>';
sizeoption[4] = '<option value="1-1/2 inch round button with magnet back">1.5 inch - Fridge Magnet Back</option>';
sizeoption[5] = '<option value="1-1/2 inch round button with clothing magnet back">1.5 inch - Clothing Magnet Back</option>';
//sizeoption[5] = '<option value="1-1/2 inch round button with keychain back">1.5 inch - Keychain</option>';
sizeoption[6] = '<option value="1-1/2 inch round button with nothing on back">1.5 inch - Nothing on Back</option>';
sizeoption[7] = '<option value="2-1/4 inch round button with locking pin back">2.25 inch - Standard Pin Back</option>';
sizeoption[8] = '<option value="2-1/4 inch round button with magnet back">2.25 inch - Fridge Magnet Back</option>';
sizeoption[9] = '<option value="2-1/4 inch round button with clothing magnet back">2.25 inch - Clothing Magnet Back</option>';
//sizeoption[9] = '<option value="2-1/4 inch round button with keychain back">2.25 inch - Keychain</option>';
sizeoption[10] = '<option value="2-1/4 inch round button with bottle opener back">2.25 inch - Bottle Opener</option>';
sizeoption[11] = '<option value="2-1/4 inch round button with mirror back">2.25 inch - Mirror Back</option>';
sizeoption[12] = '<option value="2-1/4 inch round button with clip back">2.25 inch - Clip Back</option>';
sizeoption[13] = '<option value="2-1/4 inch round button with nothing on back">2.25 inch - Nothing on Back</option>';
sizeoption[14] = '<option value="3 inch round button with locking pin back">3 inch - Standard Pin Back</option>';
sizeoption[15] = '<option value="3 inch round button with magnet back">3 inch - Fridge Magnet Back</option>';
sizeoption[16] = '<option value="3 inch round button with clothing magnet back">3 inch - Clothing Magnet Back</option>';
sizeoption[17] = '<option value="3 inch round button with mirror back">3 inch - Mirror Back</option>';
sizeoption[18] = '<option value="3 inch round button with clip back">3 inch - Clip Back</option>';
sizeoption[19] = '<option value="3 inch round button with nothing on back">3 inch - Nothing on Back</option>';

//all product options available including whats not available to the public
var allsizeoption = [];
allsizeoption[0] = '<option value="1 inch round button with locking pin back">1 inch - Standard Pin Back</option>';
allsizeoption[1] = '<option value="1 inch round button with magnet back">1 inch - Magnet Back</option>';
allsizeoption[2] = '<option value="1 inch round button with nothing on back">1 inch - Nothing on Back</option>';
allsizeoption[3] = '<option value="1-1/2 inch round button with locking pin back">1.5 inch - Standard Pin Back</option>';
allsizeoption[4] = '<option value="1-1/2 inch round button with magnet back">1.5 inch - Magnet Back</option>';
allsizeoption[5] = '<option value="1-1/2 inch round button with clothing magnet back">1.5 inch - Clothing Magnet Back</option>';
allsizeoption[6] = '<option value="1-1/2 inch round button with keychain back">1.5 inch - Keychain</option>';
allsizeoption[7] = '<option value="1-1/2 inch round button with nothing on back">1.5 inch - Nothing on Back</option>';
allsizeoption[8] = '<option value="2-1/4 inch round button with locking pin back">2.25 inch - Standard Pin Back</option>';
allsizeoption[9] = '<option value="2-1/4 inch round button with magnet back">2.25 inch - Magnet Back</option>';
allsizeoption[10] = '<option value="2-1/4 inch round button with clothing magnet back">2.25 inch - Clothing Magnet Back</option>';
allsizeoption[11] = '<option value="2-1/4 inch round button with keychain back">2.25 inch - Keychain</option>';
allsizeoption[12] = '<option value="2-1/4 inch round button with bottle opener back">2.25 inch - Bottle Opener</option>';
allsizeoption[13] = '<option value="2-1/4 inch round button with mirror back">2.25 inch - Mirror Back</option>';
allsizeoption[14] = '<option value="2-1/4 inch round button with clip back">2.25 inch - Clip Back</option>';
allsizeoption[15] = '<option value="2-1/4 inch round button with nothing on back">2.25 inch - Nothing on Back</option>';
allsizeoption[16] = '<option value="3 inch round button with locking pin back">3 inch - Standard Pin Back</option>';
allsizeoption[17] = '<option value="3 inch round button with magnet back">3 inch - Magnet Back</option>';
allsizeoption[18] = '<option value="3 inch round button with clothing magnet back">3 inch - Clothing Magnet Back</option>';
allsizeoption[19] = '<option value="3 inch round button with mirror back">3 inch - Mirror Back</option>';
allsizeoption[20] = '<option value="3 inch round button with clip back">3 inch - Clip Back</option>';
allsizeoption[21] = '<option value="3 inch round button with nothing on back">3 inch - Nothing on Back</option>';

var prodshortnames = [];
prodshortnames[0] = "Standard Pin Back";
prodshortnames[1] = "Refrigerator Magnet";
prodshortnames[2] = "Clothing Magnet";
prodshortnames[3] = "Bottle Opener";
prodshortnames[4] = "Mirror Back";
prodshortnames[5] = "Clip Back";
prodshortnames[6] = "Nothing on Back";

var allprodshortnames = [];
allprodshortnames[0] = "Standard Pin Back";
allprodshortnames[1] = "Refrigerator Magnet";
allprodshortnames[2] = "Clothing Magnet";
allprodshortnames[3] = "Keychain";
allprodshortnames[4] = "Bottle Opener";
allprodshortnames[5] = "Mirror Back";
allprodshortnames[6] = "Clip Back";
allprodshortnames[7] = "Nothing on Back";

var prodids = [];
prodids[0] = "idsbp";
prodids[1] = "idrf";
prodids[2] = "idcm";
prodids[3] = "idbo";
prodids[4] = "idpm";
prodids[5] = "idcb";
prodids[6] = "idnob";

var allprodids = [];
allprodids[0] = "idsbp";
allprodids[1] = "idrf";
allprodids[2] = "idcm";
allprodids[3] = "idkc";
allprodids[4] = "idbo";
allprodids[5] = "idpm";
allprodids[6] = "idcb";
allprodids[7] = "idnob";

var proddescs = [];
proddescs['Standard Pin Back'] = [];
proddescs['Standard Pin Back'][0] = "1 inch round button with locking pin back";
proddescs['Standard Pin Back'][1] = "1-1/2 inch round button with locking pin back";
proddescs['Standard Pin Back'][2] = "2-1/4 inch round button with locking pin back";
proddescs['Standard Pin Back'][3] = "3 inch round button with locking pin back";
proddescs['Refrigerator Magnet'] = [];
proddescs['Refrigerator Magnet'][0] = "1 inch round button with magnet back";
proddescs['Refrigerator Magnet'][1] = "1-1/2 inch round button with magnet back";
proddescs['Refrigerator Magnet'][2] = "2-1/4 inch round button with magnet back";
proddescs['Refrigerator Magnet'][3] = "3 inch round button with magnet back";
proddescs['Clothing Magnet'] = [];
proddescs['Clothing Magnet'][0] = "1-1/2 inch round button with clothing magnet back";
proddescs['Clothing Magnet'][1] = "2-1/4 inch round button with clothing magnet back";
proddescs['Clothing Magnet'][2] = "3 inch round button with clothing magnet back";
proddescs['Bottle Opener'] = [];
proddescs['Bottle Opener'][0] = "2-1/4 inch round button with bottle opener back";
proddescs['Mirror Back'] = [];
proddescs['Mirror Back'][0] = "2-1/4 inch round button with mirror back";
proddescs['Mirror Back'][1] = "3 inch round button with mirror back";
proddescs['Nothing on Back'] = [];
proddescs['Nothing on Back'][0] = "1 inch round button with nothing on back";
proddescs['Nothing on Back'][1] = "1-1/2 inch round button with nothing on back";
proddescs['Nothing on Back'][2] = "2-1/4 inch round button with nothing on back";
proddescs['Nothing on Back'][3] = "3 inch round button with nothing on back";
proddescs['Clip Back'] = [];
proddescs['Clip Back'][0] = "2-1/4 inch round button with clip back";
proddescs['Clip Back'][1] = "3 inch round button with clip back";


var allproddescs = [];
allproddescs['Standard Pin Back'] = [];
allproddescs['Standard Pin Back'][0] = "1 inch round button with locking pin back";
allproddescs['Standard Pin Back'][1] = "1-1/2 inch round button with locking pin back";
allproddescs['Standard Pin Back'][2] = "2-1/4 inch round button with locking pin back";
allproddescs['Standard Pin Back'][3] = "3 inch round button with locking pin back";
allproddescs['Refrigerator Magnet'] = [];
allproddescs['Refrigerator Magnet'][0] = "1 inch round button with magnet back";
allproddescs['Refrigerator Magnet'][1] = "1-1/2 inch round button with magnet back";
allproddescs['Refrigerator Magnet'][2] = "2-1/4 inch round button with magnet back";
allproddescs['Refrigerator Magnet'][3] = "3 inch round button with magnet back";
allproddescs['Clothing Magnet'] = [];
allproddescs['Clothing Magnet'][0] = "1-1/2 inch round button with clothing magnet back";
allproddescs['Clothing Magnet'][1] = "2-1/4 inch round button with clothing magnet back";
allproddescs['Clothing Magnet'][2] = "3 inch round button with clothing magnet back";
allproddescs['Keychain'] = [];
allproddescs['Keychain'][0] = "1-1/2 inch round button with keychain back";
allproddescs['Keychain'][1] = "2-1/4 inch round button with keychain back";
allproddescs['Bottle Opener'] = [];
allproddescs['Bottle Opener'][0] = "2-1/4 inch round button with bottle opener back";
allproddescs['Mirror Back'] = [];
allproddescs['Mirror Back'][0] = "2-1/4 inch round button with mirror back";
allproddescs['Mirror Back'][1] = "3 inch round button with mirror back";
allproddescs['Nothing on Back'] = [];
allproddescs['Nothing on Back'][0] = "1 inch round button with nothing on back";
allproddescs['Nothing on Back'][1] = "1-1/2 inch round button with nothing on back";
allproddescs['Nothing on Back'][2] = "2-1/4 inch round button with nothing on back";
allproddescs['Nothing on Back'][3] = "3 inch round button with nothing on back";
allproddescs['Clip Back'] = [];
allproddescs['Clip Back'][0] = "2-1/4 inch round button with clip back";
allproddescs['Clip Back'][1] = "3 inch round button with clip back";

var prodlongids = [];
prodlongids['Standard Pin Back'] = [];
prodlongids['Standard Pin Back'][0] = "op1inpb";
prodlongids['Standard Pin Back'][1] = "op115inpb";
prodlongids['Standard Pin Back'][2] = "op225inpb";
prodlongids['Standard Pin Back'][3] = "op3inpb";
prodlongids['Refrigerator Magnet'] = [];
prodlongids['Refrigerator Magnet'][0] = "op1inmagb";
prodlongids['Refrigerator Magnet'][1] = "op115inmagb";
prodlongids['Refrigerator Magnet'][2] = "op225inmagb";
prodlongids['Refrigerator Magnet'][3] = "op3inmagb";
prodlongids['Clothing Magnet'] = [];
prodlongids['Clothing Magnet'][0] = "op115incmagb";
prodlongids['Clothing Magnet'][1] = "op225incmagb";
prodlongids['Clothing Magnet'][2] = "op3incmagb";
prodlongids['Bottle Opener'] = [];
prodlongids['Bottle Opener'][0] = "op225inbob";
prodlongids['Mirror Back'] = [];
prodlongids['Mirror Back'][0] = "op225inmirb";
prodlongids['Mirror Back'][1] = "op3inmirb";
prodlongids['Nothing on Back'] = [];
prodlongids['Nothing on Back'][0] = "op1innobb";
prodlongids['Nothing on Back'][1] = "op15innobb";
prodlongids['Nothing on Back'][2] = "op225innobb";
prodlongids['Nothing on Back'][3] = "op3innobb";
prodlongids['Clip Back'] = [];
prodlongids['Clip Back'][0] = "op225incbb";
prodlongids['Clip Back'][1] = "op3incbb";

var allprodlongids = [];
allprodlongids['Standard Pin Back'] = [];
allprodlongids['Standard Pin Back'][0] = "op1inpb";
allprodlongids['Standard Pin Back'][1] = "op115inpb";
allprodlongids['Standard Pin Back'][2] = "op225inpb";
allprodlongids['Standard Pin Back'][3] = "op3inpb";
allprodlongids['Refrigerator Magnet'] = [];
allprodlongids['Refrigerator Magnet'][0] = "op1inmagb";
allprodlongids['Refrigerator Magnet'][1] = "op115inmagb";
allprodlongids['Refrigerator Magnet'][2] = "op225inmagb";
allprodlongids['Refrigerator Magnet'][3] = "op3inmagb";
allprodlongids['Clothing Magnet'] = [];
allprodlongids['Clothing Magnet'][0] = "op115incmagb";
allprodlongids['Clothing Magnet'][1] = "op225incmagb";
allprodlongids['Clothing Magnet'][2] = "op3incmagb";
allprodlongids['Keychain'] = [];
allprodlongids['Keychain'][0] = "op115inkeyb";
allprodlongids['Keychain'][1] = "op225inkeyb";
allprodlongids['Bottle Opener'] = [];
allprodlongids['Bottle Opener'][0] = "op225inbob";
allprodlongids['Mirror Back'] = [];
allprodlongids['Mirror Back'][0] = "op225inmirb";
allprodlongids['Mirror Back'][1] = "op225inmirb";
allprodlongids['Nothing on Back'] = [];
allprodlongids['Nothing on Back'][0] = "op1innobb";
allprodlongids['Nothing on Back'][1] = "op15innobb";
allprodlongids['Nothing on Back'][2] = "op225innobb";
allprodlongids['Nothing on Back'][3] = "op3innobb";
allprodlongids['Clip Back'] = [];
allprodlongids['Clip Back'][0] = "op225incbb";
allprodlongids['Clip Back'][1] = "op3incbb";

var prodsizes = [];
prodsizes['Standard Pin Back'] = [];
prodsizes['Standard Pin Back'][0] = "1 inch";
prodsizes['Standard Pin Back'][1] = "1.5 inch";
prodsizes['Standard Pin Back'][2] = "2.25 inch";
prodsizes['Standard Pin Back'][3] = "3 inch";
prodsizes['Refrigerator Magnet'] = [];
prodsizes['Refrigerator Magnet'][0] = "1 inch";
prodsizes['Refrigerator Magnet'][1] = "1.5 inch";
prodsizes['Refrigerator Magnet'][2] = "2.25 inch";
prodsizes['Refrigerator Magnet'][3] = "3 inch";
prodsizes['Clothing Magnet'] = [];
prodsizes['Clothing Magnet'][0] = "1.5 inch";
prodsizes['Clothing Magnet'][1] = "2.25 inch";
prodsizes['Clothing Magnet'][2] = "3 inch";
prodsizes['Bottle Opener'] = [];
prodsizes['Bottle Opener'][0] = "2.25 inch";
prodsizes['Mirror Back'] = [];
prodsizes['Mirror Back'][0] = "2.25 inch";
prodsizes['Mirror Back'][1] = "3 inch";
prodsizes['Nothing on Back'] = [];
prodsizes['Nothing on Back'][0] = "1 inch";
prodsizes['Nothing on Back'][1] = "1.5 inch";
prodsizes['Nothing on Back'][2] = "2.25 inch";
prodsizes['Nothing on Back'][3] = "3 inch";
prodsizes['Clip Back'] = [];
prodsizes['Clip Back'][0] = "2.25 inch";
prodsizes['Clip Back'][1] = "3 inch";


var allprodsizes = [];
allprodsizes['Standard Pin Back'] = [];
allprodsizes['Standard Pin Back'][0] = "1 inch";
allprodsizes['Standard Pin Back'][1] = "1.5 inch";
allprodsizes['Standard Pin Back'][2] = "2.25 inch";
allprodsizes['Standard Pin Back'][3] = "3 inch";
allprodsizes['Refrigerator Magnet'] = [];
allprodsizes['Refrigerator Magnet'][0] = "1 inch";
allprodsizes['Refrigerator Magnet'][1] = "1.5 inch";
allprodsizes['Refrigerator Magnet'][2] = "2.25 inch";
allprodsizes['Refrigerator Magnet'][3] = "3 inch";
allprodsizes['Clothing Magnet'] = [];
allprodsizes['Clothing Magnet'][0] = "1.5 inch";
allprodsizes['Clothing Magnet'][1] = "2.25 inch";
allprodsizes['Clothing Magnet'][2] = "3 inch";
allprodsizes['Keychain'] = [];
allprodsizes['Keychain'][0] = "1.5 inch";
allprodsizes['Keychain'][1] = "2.25 inch";
allprodsizes['Bottle Opener'] = [];
allprodsizes['Bottle Opener'][0] = "2.25 inch";
allprodsizes['Mirror Back'] = [];
allprodsizes['Mirror Back'][0] = "2.25 inch";
allprodsizes['Mirror Back'][1] = "3 inch";
allprodsizes['Nothing on Back'] = [];
allprodsizes['Nothing on Back'][0] = "1 inch";
allprodsizes['Nothing on Back'][1] = "1.5 inch";
allprodsizes['Nothing on Back'][2] = "2.25 inch";
allprodsizes['Nothing on Back'][3] = "3 inch";
allprodsizes['Clip Back'] = [];
allprodsizes['Clip Back'][0] = "2.25 inch";
allprodsizes['Clip Back'][1] = "3 inch";

var allprodimages = [];
allprodimages['Standard Pin Back'] = [];
allprodimages['Standard Pin Back'][0] = "http://www.wackybuttons.com/images/backs/1inchpinback.jpg";
allprodimages['Standard Pin Back'][1] = "http://www.wackybuttons.com/images/backs/1.5inchpinback.jpg";
allprodimages['Standard Pin Back'][2] = "http://www.wackybuttons.com/images/backs/2.25inchpinback.jpg";
allprodimages['Standard Pin Back'][3] = "http://www.wackybuttons.com/images/backs/3inchpinback.jpg";
allprodimages['Refrigerator Magnet'] = [];
allprodimages['Refrigerator Magnet'][0] = "http://www.wackybuttons.com/images/backs/magnet1.jpg";
allprodimages['Refrigerator Magnet'][1] = "http://www.wackybuttons.com/images/backs/magnet15.jpg";
allprodimages['Refrigerator Magnet'][2] = "http://www.wackybuttons.com/images/backs/magnet225.jpg";
allprodimages['Refrigerator Magnet'][3] = "http://www.wackybuttons.com/images/backs/magnet3.jpg";
allprodimages['Clothing Magnet'] = [];
allprodimages['Clothing Magnet'][0] = "http://www.wackybuttons.com/images/backs/clothingmagnet15.jpg";
allprodimages['Clothing Magnet'][1] = "http://www.wackybuttons.com/images/backs/clothingmagnet225.jpg";
allprodimages['Clothing Magnet'][2] = "http://www.wackybuttons.com/images/backs/clothingmagnet3.jpg";
allprodimages['Keychain'] = [];
allprodimages['Keychain'][0] = "http://www.wackybuttons.com/images/1.5inchkeychainback.jpg";
allprodimages['Keychain'][1] = "http://www.wackybuttons.com/images/1.5inchkeychainback.jpg"; //using a 1.5 inch keychain image for 2.25 inch
allprodimages['Bottle Opener'] = [];
allprodimages['Bottle Opener'][0] = "http://www.wackybuttons.com/images/backs/bottleopener25.jpg";
allprodimages['Mirror Back'] = [];
allprodimages['Mirror Back'][0] = "http://www.wackybuttons.com/images/backs/mirror25.jpg";
allprodimages['Mirror Back'][1] = "http://www.wackybuttons.com/images/backs/mirror3.jpg";
allprodimages['Nothing on Back'] = [];
allprodimages['Nothing on Back'][0] = "http://www.wackybuttons.com/images/backs/noback1.jpg";
allprodimages['Nothing on Back'][1] = "http://www.wackybuttons.com/images/backs/noback15.jpg";
allprodimages['Nothing on Back'][2] = "http://www.wackybuttons.com/images/backs/noback225.jpg";
allprodimages['Nothing on Back'][3] = "http://www.wackybuttons.com/images/backs/noback3.jpg";
allprodimages['Clip Back'] = [];
allprodimages['Clip Back'][0] = "http://www.wackybuttons.com/images/backs/clip225.jpg";
allprodimages['Clip Back'][1] = "http://www.wackybuttons.com/images/backs/clip3.jpg";