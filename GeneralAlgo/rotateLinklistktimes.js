var rotateRight = function(head, k) {
    let n = 0;
    let currentNode = head
    while(currentNode.next){
        n++;
        currentNode = currentNode.next
    }
    
    console.log('number', n);
    let m = (n+1)%k;
    if (m === 0) return head
    currentNode.next = head
    currentNode = head

    while (m > 0) {
       m--;
       currentNode = currentNode.next
    }
    console.log('currentNode to change', currentNode);
    currentNode.next = null
    return currentNode
};

