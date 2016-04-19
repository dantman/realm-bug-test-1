'use strict';
import Realm from 'realm';

export class Obj {
	static schema = {
		name: 'Obj',
		primaryKey: 'id',
		properties: {
			id: 'string',
		}
	};
}

const realm = new Realm({
	schema: [
		Obj,
	],
	schemaVersion: 0,
});

export default realm;
