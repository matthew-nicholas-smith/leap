var sprites = [];
function newSprite(){
  sprites.push(sprite = new THREE.Mesh( geometry, material ));
}
geometry = new THREE.BoxGeometry( 1, 1, 1 );
material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
sprite = new THREE.Mesh( geometry, material );
