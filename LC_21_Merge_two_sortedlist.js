var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0);
  let curr = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  curr.next = list1 !== null ? list1 : list2;

  return dummy.next;
};


const list1 = [1, 2, 4];
const list2 = [1, 3, 4];
console.log(mergeTwoLists(list1, list2));
