class Stack {
  //리팩토링
  constructor() {
    this._size = 0; // 스택의 크기 (요소의 수)
    this.head = null; // 스택의 맨 위 요소를 가리키는 포인터
  }
  size() {
    return this._size; // 현재 스택의 크기를 반환
  }
  push(item) {
    const node = { item, next: this.head }; // 새 노드를 생성하고, 기존 head를 다음 노드로 설정
    this.head = node; // head를 새 노드로 갱신
    this._size++; // 스택 크기를 1 증가
  }
  pop() {
    if (this.head === null) {
      throw new Error("Stack is empty"); // 스택이 비어 있으면 에러 발생
    }
    const node = this.head; // 현재 head를 node에 저장
    this.head = node.next; // head를 다음 노드로 변경
    this._size--; // 스택 크기를 1 감소
    return node.item; // 제거된 노드의 item을 반환
  }
  peek() {
    if (this.head === null) {
      throw new Error("Stack is empty"); // 스택이 비어 있으면 에러 발생
    }
    return this.head.item; // 스택의 맨 위 요소를 반환 (제거하지 않음)
  }

  //리팩토링 전
  // constructor() {
  //   this.array = [];
  // }
  // size() {
  //   return this.array.length;
  // }
  // push(item) {
  //   this.array.push(item);
  // }
  // pop() {
  //   if (this.array.length === 0) {
  //     throw new Error("Stack is empty");
  //   }
  //   return this.array.pop();
  // }
  // peek() {
  //   if (this.array.length === 0) {
  //     throw new Error("Stack is empty");
  //   }
  //   return this.array[this.size() - 1];
  // }
}

module.exports = Stack;
