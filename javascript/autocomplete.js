class TrieNode {
    constructor() {
        this.children = {};  // Children nodes
        this.isEndOfWord = false;  // Flag to mark the end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Method to insert a word into the Trie
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    // Helper method to find the node corresponding to the last character of the prefix
    _searchPrefix(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return null;
            }
            node = node.children[char];
        }
        return node;
    }

    // Method to search for words starting with the given prefix
    search(prefix) {
        const node = this._searchPrefix(prefix);
        const suggestions = [];
        if (node) {
            this._collectAllWords(node, prefix, suggestions);
        }
        return suggestions;
    }

    // Helper method to collect all words from a given node
    _collectAllWords(node, prefix, suggestions) {
        if (node.isEndOfWord) {
            suggestions.push(prefix);
        }

        for (let char in node.children) {
            this._collectAllWords(node.children[char], prefix + char, suggestions);
        }
    }
}

// Example usage
const trie = new Trie();
const words = ["apple", "apricot", "banana", "mango", "grape", "orange"];
words.forEach(word => trie.insert(word));

console.log(trie.search("ap"));  // Output: ['apple', 'apricot']
console.log(trie.search("ma"));  // Output: ['mango']
console.log(trie.search("gr"));  // Output: ['grape']