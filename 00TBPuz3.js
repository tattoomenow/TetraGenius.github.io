var container,scene,scene2,backgroundScene,backgroundCamera,camera,cameraLeft,cameraRight,renderer,controls,controls1,currentFile,objectX,objectT,objectT1,particleLight,projector,raycaster,INTERSECTED,faceColorMaterial,light1,light2,light3,iR,i,iiL,xi,yi,zi,si,sy,sz,keyCode,KeyCodeUp,Xsym,Ysym,Zsym,Btable,object3,object4,object2,octa,octa2,octaX,octaY,octaZ,cubeColor,backgroundMesh,folder1,Tadd,playingNow,audio,loaded,retrievedObject,keyboard=new KeyboardState,targetList=[],targetListX=[],targetListY=[],targetListXY=[],savedFiles=[],userLocalName=[],userLocalPass=[],numSavedFiles=0,current=["NONE",""],activeFiles=[],numUserL=0,numUsers=1,possiX=[],possiY=[],possiZ=[],possiXX=[],possiYX=[],possiZX=[],possiXY=[],possiYY=[],possiZY=[],possiXXY=[],possiYXY=[],possiZXY=[],TFlagNum=[],TFlagNumX=[],TFlagNumY=[],TFlagNumXY=[],TColour=[],TColourX=[],TColourY=[],TColourXY=[],rotX=[],rotY=[],rotZ=[],rotXX=[],rotYX=[],rotZX=[],rotXY=[],rotYY=[],rotZY=[],rotXXY=[],rotYXY=[],rotZXY=[],DesT=[],vv0x=[],vv0y=[],vv0z=[],vv1x=[],vv1y=[],vv1z=[],vv2x=[],vv2y=[],vv2z=[],vv3x=[],vv3y=[],vv3z=[],count=0,mirX=[],mirY=[],mirXY=[],targetOBJ=[],objects=[],objectsL=[],objectXxx=[],lightsP=[],mouse={x:0,y:0},isShiftDown=!(activeFiles[0]=". "),separation=.1,selectedFaces=[],floorSide=1e3,baseColor=new THREE.Color(15654246),highlightedColor=new THREE.Color(14526976),selectedColor=new THREE.Color(4482781),mouseSphereCoords=null,mouseSphere=[],material=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors}),li=2,ci=1,cii=1,ciiX=0,ciiY=0,ciiXY=0,materials=[],shininess=50,specular=3355443,bumpScale=1,shading=THREE.SmoothShading,xposi1=3.3003030003033005,yposi1=2.220020202002022,zposi1=5.500550500505505,Doption="OFF",Rainbow="Greys",BTab="None",xxpo=xposi1/(Math.PI/3)*Math.floor(xposi1/Math.floor(xposi1)+yposi1+zposi1-Math.floor(yposi1+zposi1))/Math.PI/Math.floor(xposi1/3),yypo=5*Math.PI*Math.floor(yposi1/Math.floor(yposi1)+xposi1+zposi1-Math.floor(xposi1+zposi1))/Math.PI/Math.floor(yposi1/10),zzpo=2*Math.PI*Math.floor(zposi1/Math.floor(zposi1)+xposi1+yposi1-Math.floor(yposi1+xposi1))/Math.PI/Math.floor(zposi1/2.5),rotSelect2=[],rotSelect=[],texture3=(new THREE.TextureLoader).load("textures/grass.jpg"),material111=new THREE.MeshLambertMaterial({color:3355443,transparent:!0,opacity:0}),material11=new THREE.MeshLambertMaterial({color:16777215,transparent:!0,opacity:0}),material999=new THREE.MeshLambertMaterial({color:65280,transparent:!0,opacity:.3}),material12=new THREE.MeshLambertMaterial({color:16776960,transparent:!0,opacity:1}),material13=new THREE.MeshLambertMaterial({color:15662848}),material14=new THREE.MeshLambertMaterial({color:15662848}),material15=new THREE.MeshLambertMaterial({color:16777215,transparent:!0,opacity:1}),material16=new THREE.MeshLambertMaterial({color:8396869,transparent:!0,opacity:1}),addTetraFlag=0,addTetraFlag2=0,Load2=0,addDesignFlag=0,designs=[],textures=[],xxx=0,TransparentBlock="False",saveOBJ1="SavedOBJ",colcol="0x2222cc",colcol2="0x2222cc",musicC=[],retrievedObjectA=[],sentObjectA={},userObject=[],USERS={},tetrasL=[],angleObx=0,angleOby=0,angleObz=0,angleOb=Math.PI,ciiB=0,ciiA=0,tetNames=["Geometric","Platform","SpaceBric","SquareFlat","Slide","Modern"," ","Torus","Clipped","TetraFrame","TetraMag","ThickStar","ThinStar","Flower","Original"," ","Triangles","Magnet Ball","Pipes","Cubic","Spiral","Half-Pipe"," ","Flatpack","Dragon","Heart-shape","Heart-logo","Leaf","DNA segment","Oval"," ","Sphere0","Sphere1","Sphere2","Sphere3","Sphere4"," ","Organic1","Organic2","Organic3"," ","Globe1","Globe2","Globe3","Globe4","Globe5","Globe6"," "],tNames=tetNames.slice(0,6),tNames2=tetNames.slice(6,15),tNames3=tetNames.slice(15,22),tNames4=tetNames.slice(22,30),tNames5=tetNames.slice(30,36),tNames6=tetNames.slice(36,43),tetraName="Abstract",loadingF=0,texNames=["N1","N2","N3","N4","N5","N6","N7","N8","E1","E2","E3","E4","E5","E6","E7","E8","S1","S2","S3","S4","S5","S6","S7","S8","None"];textures=["textures/n1.png","textures/n2.png","textures/n3.png","textures/n4.png","textures/n5.png","textures/n6.png","textures/n7.png","textures/n8.png","textures/e1.png","textures/e2.png","textures/e3.png","textures/e4.png","textures/e5.png","textures/e6.png","textures/e7.png","textures/e8.png","textures/s1.png","textures/s2.png","textures/s3.png","textures/s4.png","textures/s5.png","textures/s6.png","textures/s7.png","textures/s8.png","textures/none.png"],designs=["models/obj/globe2.obj","models/obj/Platform.obj","models/obj/Original.obj","models/obj/TetraSquare1.obj","models/obj/solid4.obj","models/obj/modern.obj"," ","models/obj/Tetratorus.obj","models/obj/snake.obj","models/obj/Tetraframe1.obj","models/obj/magnetic1.obj","models/obj/slivers2.obj","models/obj/thin.obj","models/obj/press.obj","models/obj/Abstract.obj"," ","models/obj/Triangle.obj","models/obj/magneticball.obj","models/obj/pipe2.obj","models/obj/dice.obj","models/obj/stair.obj","models/obj/halfpipe2.obj"," ","models/obj/Flatpacka.obj","models/obj/dragon2.obj","models/obj/heart.obj","models/obj/heart3.obj","models/obj/leaf.obj","models/obj/DNA3.obj","models/obj/pipe2018d.obj"," ","models/obj/spacebrickpline.obj","models/obj/sphere1.obj","models/obj/sphere2.obj","models/obj/tox.obj","models/obj/sphere4.obj"," ","models/obj/cubic.obj","models/obj/organic2.obj","models/obj/organic3.obj","models/obj/leaf.obj","models/obj/heart.obj","models/obj/spiral.obj"];var texFlag=0,texture2=(new THREE.TextureLoader).load(textures[texFlag]);