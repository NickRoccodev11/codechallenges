
// Requirements
// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

// Define these methods:

// `getWidth()` return the width of the `Block`

// `getLength()` return the length of the `Block`

// `getHeight()` return the height of the `Block`

// `getVolume()` return the volume of the `Block`

// `getSurfaceArea()` return the surface area of the `Block`



class Block{

    constructor(data){
      this.width  = data[0]
      this.length = data[1]
      this.height = data[2]
    }
    getWidth(width){
      return this.width
    }  
    
    getLength(length){
      return this.length
    }
    
    getHeight(height){
      return this.height
    }
  
    getVolume(length, width, height){
      return this.length * this.width * this.height
    }
    
    getSurfaceArea(length,width, height){
      return	 2 * (this.length * this.width + this.width * this.height + this.length * this.height)
    }
}