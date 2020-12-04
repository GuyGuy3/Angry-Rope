class Rope {
constructor (body1,body2){
var options = {
bodyA:body1,bodyB:body2,length:20,stiffness:1   
}
this.rope = Matter.Constraint.create(options)
World.add(world,this.rope)
}
display() {
 var pointA = this.rope.bodyA.position
 var pointB = this.rope.bodyB.position
 line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}