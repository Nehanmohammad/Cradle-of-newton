class Rope{
    constructor(body1,body2,offsetx,offsety)
    {
        this.offsetx = offsetx;
        this.offsety = offsety;
        var options = {
            bodyA:body1,
            bodyB: body2,
            pointB: {x:this.offsetx,  y:this.offsety}
        } 
        this.rope = Constraint.create(options)
        World.add(world,this.rope)
    }
}