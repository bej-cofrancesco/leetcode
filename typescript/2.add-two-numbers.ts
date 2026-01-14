import ListNode from "./common/listnode";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let result: ListNode | null = new ListNode(0);
  let curr = 0;
  let node = result;

  while (l1 || l2 || curr) {
    let sum = curr;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    curr = sum % 10 | 0;
    node.next = new ListNode(curr);
    node = node.next;
  }

  return result.next;
}

// TEST CASES
console.log(addTwoNumbers(new ListNode([2, 4, 3]), new ListNode([5, 6, 4])));
