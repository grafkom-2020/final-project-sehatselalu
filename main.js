let scene, camera, renderer, mesh, group, meshFloor, group2, group3;
let keyboard = {};
let player = { height:1.3, speed: 0.08, turnSpeed: Math.PI * 0.01};

let sound = document.createElement("audio");
sound.src = "./missle_siren.mp3";

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(90, innerWidth/innerHeight, 0.1, 1000);

    mesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 0.3, 0.3),
        new THREE.MeshPhongMaterial({color: 0x00ff00, wireframe: false})
    );
  
    mesh.position.y = 1;
    // mesh.receiveShadow = true;
    mesh.castShadow = true;
    scene.add(mesh);

    meshFloor = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 18, 10, 10),
        new THREE.MeshPhongMaterial({color:0xffffff, wireframe: false})
    );

    meshFloor.receiveShadow = true;
    scene.add(meshFloor);
    meshFloor.rotation.x -= Math.PI / 2;
    
    light = new THREE.PointLight(0xffffff, 0.7, 8);
    light.position.set(0, 5, 0);
    light.castShadow = true;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 25;

    lamp = new THREE.PointLight(0xffa500, 0.3, 6);
    lamp.position.set(-7.5, 2, -2);
    lamp.castShadow = true;
    
    scene.add(light);
    scene.add(lamp);


    var mtlLoader0 = new THREE.MTLLoader();
    mtlLoader0.load("RoadPack/roadTile_002.mtl", function(materials){
        materials.preload();
        var objLoader0 = new THREE.OBJLoader();
        objLoader0.setMaterials(materials);

        objLoader0.load("RoadPack/roadTile_002.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -10;
            mesh.position.z = -3;
        })
    });
    var mtlLoader1 = new THREE.MTLLoader();
    mtlLoader1.load("RoadPack/roadTile_002.mtl", function(materials){
        materials.preload();
        var objLoader1 = new THREE.OBJLoader();
        objLoader1.setMaterials(materials);

        objLoader1.load("RoadPack/roadTile_002.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -10;
        })
    });
    var mtlLoader2 = new THREE.MTLLoader();
    mtlLoader2.load("RoadPack/roadTile_002.mtl", function(materials){
        materials.preload();
        var objLoader2 = new THREE.OBJLoader();
        objLoader2.setMaterials(materials);

        objLoader2.load("RoadPack/roadTile_002.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -10;
            mesh.position.z = -6;
        })
    });
    var mtlLoader3 = new THREE.MTLLoader();
    mtlLoader3.load("RoadPack/roadTile_002.mtl", function(materials){
        materials.preload();
        var objLoader3 = new THREE.OBJLoader();
        objLoader3.setMaterials(materials);

        objLoader3.load("RoadPack/roadTile_002.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -10;
            mesh.position.z = 3;
        })
    });
    var mtlLoader4 = new THREE.MTLLoader();
    mtlLoader4.load("RoadPack/roadTile_002.mtl", function(materials){
        materials.preload();
        var objLoader4 = new THREE.OBJLoader();
        objLoader4.setMaterials(materials);

        objLoader4.load("RoadPack/roadTile_002.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -10;
            mesh.position.z = 6;
        })
    });
    var mtlLoader5 = new THREE.MTLLoader();
    mtlLoader5.load("RoadPack/roadTile_002.mtl", function(materials){
        materials.preload();
        var objLoader5 = new THREE.OBJLoader();
        objLoader5.setMaterials(materials);

        objLoader5.load("RoadPack/roadTile_002.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -10;
            mesh.position.z = 9;
        })
    });
    var mtlLoader5 = new THREE.MTLLoader();
    mtlLoader5.load("RoadPack/roadTile_058.mtl", function(materials){
        materials.preload();
        var objLoader5 = new THREE.OBJLoader();
        objLoader5.setMaterials(materials);

        objLoader5.load("RoadPack/roadTile_058.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -7;
        })
    });
    var mtlLoader6 = new THREE.MTLLoader();
    mtlLoader6.load("RoadPack/roadTile_058.mtl", function(materials){
        materials.preload();
        var objLoader6 = new THREE.OBJLoader();
        objLoader6.setMaterials(materials);

        objLoader6.load("RoadPack/roadTile_058.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -4;
        })
    });
    var mtlLoader7 = new THREE.MTLLoader();
    mtlLoader7.load("RoadPack/roadTile_058.mtl", function(materials){
        materials.preload();
        var objLoader7 = new THREE.OBJLoader();
        objLoader7.setMaterials(materials);

        objLoader7.load("RoadPack/roadTile_058.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -7;
            mesh.position.z = 3;
        })
    });
    var mtlLoader8 = new THREE.MTLLoader();
    mtlLoader8.load("RoadPack/roadTile_058.mtl", function(materials){
        materials.preload();
        var objLoader8 = new THREE.OBJLoader();
        objLoader8.setMaterials(materials);

        objLoader8.load("RoadPack/roadTile_058.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -7;
            mesh.position.z = -3;
        })
    });
    var mtlLoader9 = new THREE.MTLLoader();
    mtlLoader9.load("RoadPack/roadTile_058.mtl", function(materials){
        materials.preload();
        var objLoader9 = new THREE.OBJLoader();
        objLoader9.setMaterials(materials);

        objLoader9.load("RoadPack/roadTile_058.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -7;
            mesh.position.z = -6;
        })
    });
    var mtlLoader9 = new THREE.MTLLoader();
    mtlLoader9.load("RoadPack/roadTile_058.mtl", function(materials){
        materials.preload();
        var objLoader9 = new THREE.OBJLoader();
        objLoader9.setMaterials(materials);

        objLoader9.load("RoadPack/roadTile_058.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -7;
            mesh.position.z = 6;
        })
    });
    var mtlLoader10 = new THREE.MTLLoader();
    mtlLoader10.load("RoadPack/roadTile_058.mtl", function(materials){
        materials.preload();
        var objLoader10 = new THREE.OBJLoader();
        objLoader10.setMaterials(materials);

        objLoader10.load("RoadPack/roadTile_058.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -7;
            mesh.position.z = 9;
        })
    });
    var mtlLoader10 = new THREE.MTLLoader();
    mtlLoader10.load("RoadPack/roadTile_058.mtl", function(materials){
        materials.preload();
        var objLoader10 = new THREE.OBJLoader();
        objLoader10.setMaterials(materials);

        objLoader10.load("RoadPack/roadTile_058.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -7;
            mesh.position.z = 9;
        })
    });
    var mtlLoader11 = new THREE.MTLLoader();
    mtlLoader11.load("RoadPack/roadTile_058.mtl", function(materials){
        materials.preload();
        var objLoader11 = new THREE.OBJLoader();
        objLoader11.setMaterials(materials);

        objLoader11.load("RoadPack/roadTile_058.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -4;
            mesh.position.z = 9;
        })
    });
    var mtlLoader12 = new THREE.MTLLoader();
    mtlLoader12.load("RoadPack/roadTile_058.mtl", function(materials){
        materials.preload();
        var objLoader12 = new THREE.OBJLoader();
        objLoader12.setMaterials(materials);

        objLoader12.load("RoadPack/roadTile_058.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -4;
            mesh.position.z = 6;
        })
    });
    var mtlLoader13 = new THREE.MTLLoader();
    mtlLoader13.load("RoadPack/roadTile_058.mtl", function(materials){
        materials.preload();
        var objLoader13 = new THREE.OBJLoader();
        objLoader13.setMaterials(materials);

        objLoader13.load("RoadPack/roadTile_058.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -4;
            mesh.position.z = 3;
        })
    });
    var mtlLoader14 = new THREE.MTLLoader();
    mtlLoader14.load("RoadPack/roadTile_058.mtl", function(materials){
        materials.preload();
        var objLoader14 = new THREE.OBJLoader();
        objLoader14.setMaterials(materials);

        objLoader14.load("RoadPack/roadTile_058.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -4;
            mesh.position.z = 0;
        })
    });
    var mtlLoader15 = new THREE.MTLLoader();
    mtlLoader15.load("RoadPack/roadTile_058.mtl", function(materials){
        materials.preload();
        var objLoader15 = new THREE.OBJLoader();
        objLoader15.setMaterials(materials);

        objLoader15.load("RoadPack/roadTile_058.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -4;
            mesh.position.z = -3;
        })
    }); 
    var mtlLoader16 = new THREE.MTLLoader();
    mtlLoader16.load("RoadPack/roadTile_058.mtl", function(materials){
        materials.preload();
        var objLoader16 = new THREE.OBJLoader();
        objLoader16.setMaterials(materials);

        objLoader16.load("RoadPack/roadTile_058.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -4;
            mesh.position.z = -6;
        })
    });
    var mtlLoader17 = new THREE.MTLLoader();
    mtlLoader17.load("RoadPack/roadTile_019.mtl", function(materials){
        materials.preload();
        var objLoader16 = new THREE.OBJLoader();
        objLoader16.setMaterials(materials);

        objLoader16.load("RoadPack/roadTile_019.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -8.5;
            mesh.position.z = -3;
            mesh.position.y = 0.7;
        })
    });
    let fenceLoader0 = new THREE.MTLLoader();
    fenceLoader0.load("Graveyard/ironFenceBorder.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("Graveyard/ironFenceBorder.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -6.5;
            mesh.position.z = -8.5;
            mesh.position.y = 0.6;
            mesh.rotation.y = 90 * (Math.PI/180)
        })
    });
    let fenceLoader1 = new THREE.MTLLoader();
    fenceLoader1.load("Graveyard/ironFenceBorder.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("Graveyard/ironFenceBorder.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -6.5;
            mesh.position.z = -7.5;
            mesh.position.y = 0.6;
            mesh.rotation.y = 90 * (Math.PI/180)
        })
    });

    let fenceLoader2 = new THREE.MTLLoader();
    fenceLoader2.load("Graveyard/ironFenceBorder.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("Graveyard/ironFenceBorder.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -6.5;
            mesh.position.z = -6.5;
            mesh.position.y = 0.6;
            mesh.rotation.y = 90 * (Math.PI/180)
        })
    });

    let fenceLoader3= new THREE.MTLLoader();
    fenceLoader3.load("Graveyard/ironFenceBorder.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("Graveyard/ironFenceBorder.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -6.5;
            mesh.position.z = -5.5;
            mesh.position.y = 0.6;
            mesh.rotation.y = 90 * (Math.PI/180)
        })
    });

    let fenceLoader4= new THREE.MTLLoader();
    fenceLoader4.load("Graveyard/ironFenceBorder.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("Graveyard/ironFenceBorder.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -6.5;
            mesh.position.z = -4.5;
            mesh.position.y = 0.6;
            mesh.rotation.y = 90 * (Math.PI/180)
        })
    });

    let fenceLoader5 = new THREE.MTLLoader();
    fenceLoader5.load("Graveyard/ironFenceBorder.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("Graveyard/ironFenceBorder.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -6.5;
            mesh.position.z = -3.5;
            mesh.position.y = 0.6;
            mesh.rotation.y = 90 * (Math.PI/180)
        })
    });

    let fenceLoader6 = new THREE.MTLLoader();
    fenceLoader6.load("Graveyard/ironFenceBorder.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("Graveyard/ironFenceBorder.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -6.5;
            mesh.position.z = -2.5;
            mesh.position.y = 0.6;
            mesh.rotation.y = 90 * (Math.PI/180)
        })
    });

    let fenceLoader7 = new THREE.MTLLoader();
    fenceLoader7.load("Graveyard/ironFenceDamaged.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("Graveyard/ironFenceDamaged.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -6.5;
            mesh.position.z = -1.5;
            mesh.position.y = 0.6;
            mesh.rotation.y = 90 * (Math.PI/180)
        })
    });

    let benchLoader = new THREE.MTLLoader();
    benchLoader.load("Graveyard/bench.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("Graveyard/bench.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -8.5;
            mesh.position.z = 1.5;
            mesh.position.y = 0.7;
            mesh.rotation.y = 90 * (Math.PI/180)
        })
    });

    let fenceLoader8 = new THREE.MTLLoader();
    fenceLoader8.load("Graveyard/ironFenceBorder.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("Graveyard/ironFenceBorder.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -6.5;
            mesh.position.z = 1.5;
            mesh.position.y = 0.6;
            mesh.rotation.y = 90 * (Math.PI/180)
        })
    });

    let fenceLoader9 = new THREE.MTLLoader();
    fenceLoader9.load("Graveyard/ironFenceBorder.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("Graveyard/ironFenceBorder.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -6.5;
            mesh.position.z = 2.5;
            mesh.position.y = 0.6;
            mesh.rotation.y = 90 * (Math.PI/180)
        })
    });

    let fenceLoader10 = new THREE.MTLLoader();
    fenceLoader10.load("Graveyard/ironFenceBorder.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("Graveyard/ironFenceBorder.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -6.5;
            mesh.position.z = 3.5;
            mesh.position.y = 0.6;
            mesh.rotation.y = 90 * (Math.PI/180)
        })
    });

    let fenceLoader11 = new THREE.MTLLoader();
    fenceLoader11.load("Graveyard/ironFenceBorder.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("Graveyard/ironFenceBorder.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -6.5;
            mesh.position.z = 4.5;
            mesh.position.y = 0.6;
            mesh.rotation.y = 90 * (Math.PI/180)
        })
    });

    let fenceLoader12 = new THREE.MTLLoader();
    fenceLoader12.load("Graveyard/ironFenceBorder.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("Graveyard/ironFenceBorder.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -6.5;
            mesh.position.z = 5.5;
            mesh.position.y = 0.6;
            mesh.rotation.y = 90 * (Math.PI/180)
        })
    });

    let fenceLoader13 = new THREE.MTLLoader();
    fenceLoader13.load("Graveyard/ironFenceBorder.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("Graveyard/ironFenceBorder.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -6.5;
            mesh.position.z = 6.5;
            mesh.position.y = 0.6;
            mesh.rotation.y = 90 * (Math.PI/180)
        })
    });

    let fenceLoader14 = new THREE.MTLLoader();
    fenceLoader14.load("Graveyard/ironFenceBorder.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("Graveyard/ironFenceBorder.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -6.5;
            mesh.position.z = 7.5;
            mesh.position.y = 0.6;
            mesh.rotation.y = 90 * (Math.PI/180)
        })
    });

    let fenceLoader15 = new THREE.MTLLoader();
    fenceLoader15.load("Graveyard/ironFenceBorderColumn.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("Graveyard/ironFenceBorderColumn.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -7.4;
            mesh.position.z = 8.5;
            mesh.position.y = 0.6;
            mesh.rotation.y = 270 * (Math.PI/180);
        })
    });
    let treeLoader0 = new THREE.MTLLoader();
    treeLoader0.load("nature/tree_thin.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("nature/tree_thin.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -7.5;
            mesh.position.z = -3;
            mesh.position.y = 0.7;
        })
    });
    let treeLoader1 = new THREE.MTLLoader();
    treeLoader1.load("nature/tree_thin.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("nature/tree_thin.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -8.5;
            mesh.position.z = 4;
            mesh.position.y = 0.7;
        })
    });

    let treeLoader2 = new THREE.MTLLoader();
    treeLoader2.load("nature/stump_oldTall.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("nature/stump_oldTall.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -7.5;
            mesh.position.z = 3;
            mesh.position.y = 0.7;
        })
    });

    let lampLoader = new THREE.MTLLoader();
    lampLoader.load("Graveyard/lightpostSingle.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("Graveyard/lightpostSingle.obj", function(mesh){
            scene.add(mesh);
            mesh.position.x = -7.5;
            mesh.position.z = -2;
            mesh.position.y = 0.7;
        })
    });

    group = new THREE.Group();
    group2 = new THREE.Group();
    group3 = new THREE.Group();

    let taxiLoader = new THREE.MTLLoader();
    taxiLoader.load("Models/OBJformat/taxi.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("Models/OBJformat/taxi.obj", function(mesh){
            mesh.position.x = -3;
            mesh.position.z = 2;
            mesh.position.y = 0.7;
            mesh.rotation.y= 90 * (Math.PI/180);
            group.add(mesh)
            scene.add(group);
        })
    });

    let vanLoader = new THREE.MTLLoader();
    vanLoader.load("Models/OBJformat/van.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("Models/OBJformat/van.obj", function(mesh){
            mesh.position.x = -3;
            mesh.position.z = -4;
            mesh.position.y = 0.7;
            mesh.rotation.y= 90 * (Math.PI/180);
            group3.add(mesh)
            scene.add(group3);
        })
    });

    let ambulanceLoader = new THREE.MTLLoader();
    ambulanceLoader.load("Models/OBJformat/ambulance.mtl", function(materials){
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load("Models/OBJformat/ambulance.obj", function(mesh){
            mesh.position.x = -6;
            mesh.position.z = -4;
            mesh.position.y = 0.7;
            mesh.rotation.y= 270 * (Math.PI/180);
            group2.add(mesh)
            scene.add(group2);
        })
    });

    camera.position.set(-8, player.height, -1);
    camera.lookAt(new THREE.Vector3(0, player.height, 0));
    
    ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);
   
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(innerWidth, innerHeight);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.BasicShadowMap;

    document.body.appendChild(renderer.domElement);
    renderer.domElement.style.display = 'block';
    
    animate();
}

function animate() {

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    group.position.z += 0.1;
    if(group.position.z >= 7){
        group.position.z = -13;
    } 

    group2.position.z -= 0.1;
    if(group2.position.z < -7){
        group2.position.z = 10;
    }

    group3.position.z += 0.1
    if(group3.position.z >= 12){
        group3.position.z = -13;
    }


    if(keyboard[87]) {//W
        camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
        camera.position.z -= -Math.cos(camera.rotation.y) * player.speed;
    }

    if(keyboard[83]) {//S
        camera.position.x += Math.sin(camera.rotation.y) * player.speed;
        camera.position.z += -Math.cos(camera.rotation.y) * player.speed;
    }

    if(keyboard[65]) { //A
        camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * player.speed;
        camera.position.z += -Math.cos(camera.rotation.y + Math.PI/2) * player.speed;
    }

    if(keyboard[68]) { //D
        camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed;
        camera.position.z += -Math.cos(camera.rotation.y - Math.PI/2) * player.speed;
    }

    if (camera.position.x <= -7) { 
        light.color.setHex(0xffffff) 
        sound.pause();
    }
    else 
    {
        light.color.setHex(0xff0000)
        sound.play();
    }

    if(keyboard[39]) {
        camera.rotation.y += player.turnSpeed;
    }
    if(keyboard[37]) {
        camera.rotation.y -= player.turnSpeed;
    }


    renderer.render(scene, camera);

    requestAnimationFrame(animate);

}

function keyDown(event) {
    keyboard[event.keyCode] = true;
}

function keyUp(event) {
    keyboard[event.keyCode] = false;
}

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);
window.onload = init;