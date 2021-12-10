console.log("Task13\n\n");

function TextCell(text){
    this.text = text;
}

function StretchCell(inner, width, height){
    this.text = inner.text;
    this.width = width;
    this.height = height;

    this.minWidth = function () {
        return Math.max(
            this.text.split('\n').sort(
                function(a,b){
                    return b.length - a.length})[0]
                .length,
            this.width)
    }

    this.minHeight = function () {
        return Math.max(this.text.split('\n').length, this.height)
    }

    this.draw = function(width, height){
        text_joined = this.text.split('\n').join('');
        text_joined += " ".repeat(width*height - text_joined.length);
        cell = [];
        for (let i=0; i<height; i++){
            s = '';
            for (let j=0; j<width; j++){
                s += text_joined[i*width + j];
            }
            cell.push(s);
        }
        return cell;
    }
}

var sc = new StretchCell(new TextCell("ab\nde\nevf"), 1, 2);
console.log("Min width: ", sc.minWidth());
console.log("Min height: " ,sc.minHeight());
console.log("Draw: ", sc.draw(5,3));