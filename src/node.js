class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.parent=null;
		this.left=null;
		this.right=null;
	}

	appendChild(node) {
		if (this.left===null){
			this.left=node;
			this.left.parent = this;
			this.left.parent.left = this.left;
		} else if (this.right===null){
			this.right=node;
			this.right.parent = this;
			this.right.parent.right = this.right;
		}
	}

	removeChild(node) {
		if (this.left===node){
			this.left.parent = null;
			this.left=null;
		} else if (this.right===node){
			this.right.parent = null;
			this.right=null;
		} else {
			throw new Error ("passed node is not a child of this node");
		}
	}

	remove() {
		if (this.parent === null){
		} else {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (!this.parent) {
		}
		else {
				let PWithNewDP = {};
				PWithNewDP.left=this.left;
				PWithNewDP.right=this.right;
				let granDad=this.parent.parent;

				this.left=this.parent.left;
				this.right=this.parent.right;
				this.parent.left=PWithNewDP.left;
				this.parent.right=PWithNewDP.right;
				this.parent.parent=this;
				this.parent=granDad;
		}
	}
}

module.exports = Node;
