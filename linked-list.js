export { LinkedList };

class LinkedList{
    // create empty list
    constructor() {
        this.head = null
    }
    append(value){
        const newNode = new Node (value) 
        //if empty list
        if (this.head === null){
            this.head = newNode;
            return
        }
        let currentNode = this.head;
        while (currentNode.next != null){
            currentNode = currentNode.next;
        }
        // current is now last value before node
        currentNode.next = newNode;
    }
    prepend(value){
        const newNode = new Node(value);
        //new node point to old list start
        newNode.next = this.head;
        //list start with new node
        this.head = newNode;
    }
    toString(){
        let currentNode = this.head;
        let finalString = '';
        // step through each node
        while (currentNode){
            finalString += `( ${currentNode.value} ) -> `
            currentNode = currentNode.next;
        }
        finalString += 'null'
        return finalString;
    }
    size(){
        let currentNode = this.head;
        let listLength = 0;
        while (currentNode){
            listLength++;
            currentNode = currentNode.next;
        }
        return listLength;
    }
    //error when naming method head
    start(){
        let currentNode = this.head;
        return currentNode.value;
    }
    tail(){
       let currentNode = this.head;
       while (currentNode.next != null){
        currentNode = currentNode.next;
       } 
       return currentNode.value;
    }
    at(index){
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentIndex != index){
            currentNode = currentNode.next;
            currentIndex++
        }
        return currentNode.value;
    }
    pop(){
        let currentNode = this.head;
        while (currentNode.next.next != null){
            currentNode = currentNode.next
        }
        currentNode.next = null;
    }
    contains(value){
        let currentNode = this.head;
        while (currentNode){
            if (currentNode.value === value){
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }
    find(search){
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentNode){
            if (typeof currentNode.value === 'object' && currentNode.value != null && currentNode.value.key === search){
                return currentIndex
            }
            if (typeof currentNode.value === 'string' && currentNode.value === search){
                return currentIndex;
            }
            currentNode = currentNode.next;
            currentIndex++
        }
        return null;
    }
    insertAt(value, index){
        let currentNode = this.head;
        let currentIndex = 0;
        let newNode = new Node (value);
        while (currentIndex + 1 < index){
            console.l
            currentNode = currentNode.next
            currentIndex++
        }
        if (index === 0){
            newNode.next = currentNode
            this.head = newNode
        } else {
            newNode.next = currentNode.next
            currentNode.next = newNode;
        }
        
    }
    removeAt(index){
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentIndex + 1 < index){
            currentNode = currentNode.next
            currentIndex++
        }
        if (index === 0){
            this.head = currentNode.next
        } else {currentNode.next = currentNode.next.next;
        }
    }
}

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// const list = new LinkedList();
// list.append('dog');
// list.append('hedgehog');
// list.append('end');
// list.append('cat');
// list.prepend('first pre');
// list.pop();
// list.insertAt('bunny', 1)
// list.removeAt(1);
// list.insertAt('third', 2)
// console.log(list.size());
// console.log(list.toString());
// console.log(list.start());
// console.log(list.tail());
// console.log(list.at(2))
// console.log(list.contains('bunny'));
// console.log(list.find('bird'));

