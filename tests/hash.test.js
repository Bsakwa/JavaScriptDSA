import { expect } from 'chai';
import HashTable from '../data_structures/HashTable.js';

describe('HashTable', function() {
    let ht;

    beforeEach(() => {
        ht = new HashTable();
    });

    it('should set and get key-value pairs correctly', function() {
        ht.set('hello', 'world');
        ht.set('foo', 'bar');
        expect(ht.get('hello')).to.equal('world');
        expect(ht.get('foo')).to.equal('bar');
    });

    it('should return undefined for non-existent keys', function() {
        expect(ht.get('nonexistent')).to.be.undefined;
    });

    it('should remove key-value pairs correctly', function() {
        ht.set('hello', 'world');
        ht.set('foo', 'bar');
        expect(ht.remove('foo')).to.equal('bar');
        expect(ht.get('foo')).to.be.undefined;
        expect(ht.get('hello')).to.equal('world');
    });

    it('should return all keys correctly', function() {
        ht.set('hello', 'world');
        ht.set('foo', 'bar');
        expect(ht.keys()).to.have.members(['hello', 'foo']);
    });

    it('should return all values correctly', function() {
        ht.set('hello', 'world');
        ht.set('foo', 'bar');
        expect(ht.values()).to.have.members(['world', 'bar']);
    });

    it('should handle collisions correctly', function() {
        ht.set('a', 'value1');
        ht.set('b', 'value2'); // Assuming 'a' and 'b' collide in the hash function
        expect(ht.get('a')).to.equal('value1');
        expect(ht.get('b')).to.equal('value2');
    });
});
