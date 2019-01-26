function ListNode(val) {
  this.val = val;
  this.next = null;
}

// Test data example:
//[2,4,3]
//[5,6,4]

// Create sample data as LinkedList:
var l1 = new ListNode(2);
l1.next = new ListNode(4)
l1.next.next = new ListNode(3);
//l1.next.next.next = new ListNode(5);

var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // Get numbers in reverse order as string, convert to int to add them, then reverse solution.
  var num1 = parseInt(l1.next.next.val.toString() + l1.next.val.toString() + l1.val.toString());
  var num2 = parseInt(l2.next.next.val.toString() + l2.next.val.toString() + l2.val.toString());
  var total = num1 + num2;
  var totalRev = total.toString().split("").reverse();

  // Create a new list based off reversed sum.
  var newList = new ListNode(parseInt(totalRev[0]));
  newList.next = new ListNode(parseInt(totalRev[1]));
  newList.next.next = new ListNode(parseInt(totalRev[2]));

  return newList;
};

// Call function and output:
console.log(addTwoNumbers(l1, l2));