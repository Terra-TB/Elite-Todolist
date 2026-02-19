class Bar{
    constructor(init_x, init_y, init_width, init_height, init_cornerCouverture, init_color){
        this.x = init_x;
        this.y = init_y;
        this.width = init_width;
        this.height = init_height;
        this.cornerCouverture = init_cornerCouverture;
        this.color = init_color
    }



    show(){
        fill(this.color);
        rect(this.x, this.y, this.width, this.height, this.cornerCouverture);
    }
    
}