class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}



function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.

  let curr = linkedList
  while(curr.next){
      //while each node has a 'next', perform the following loop
    if(curr.value===curr.next.value){
        //if the value of the current node(n1) is the same as the value of the node after that(n2),
        //replace (n2) with the next next node(n3)
      curr.next = curr.next.next
      //if (n2) has a different value, set CURR to (n2)
    }else curr = curr.next
  }
  return linkedList;
}


