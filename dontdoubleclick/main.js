scene.add(sprite);
camera.position.z = 5;
animate = function () {
	requestAnimationFrame( animate );
	sprite.rotation.x += 0.01;
	sprite.rotation.y += 0.01;
	renderer.render( scene, camera );
};
animate();