## Adding the Speaker model

### Attributes of a Speaker

Attribute       | Type
--------------- | ---------
`first_name`    | string
`last_name`     | string
`twitter`       | string
`linkedin`      | string
`email`         | string
`topic`         | string
`speaking_date` | datetime
`github`        | string
`votes`         | integer
`company`       | string
`role`          | string

### Generate the files

First, use the Sequelize CLI to generate the model and migration files for the new schema:

```
$ node_modules/.bin/sequelize model:create --name Speaker --attributes "first_name:string, last_name:string, twitter:string, linkedin:string, email:string, topic:string, speaking_date:date, github:string, votes:integer, company:string, role:string"
```

When it's done, you should have 2 new files:

#### `models/speaker.js`
	
```javascript
'use strict';
module.exports = function(sequelize, DataTypes) {
	var Speaker = sequelize.define('Speaker', {
    		first_name: DataTypes.STRING,
    		last_name: DataTypes.STRING,
    		twitter: DataTypes.STRING,
    		linkedin: DataTypes.STRING,
    		email: DataTypes.STRING,
    		topic: DataTypes.STRING,
    		speaking_date: DataTypes.DATE,
    		github: DataTypes.STRING,
    		votes: DataTypes.INTEGER,
    		company: DataTypes.STRING,
    		role: DataTypes.STRING
	  }, {
	  	classMethods: {
      			associate: function(models) {
        			// associations can be defined here
	      		}
	    	}
	  });
	  return Speaker;
};
```

#### `migrations/...create-speaker.js`

```javascript
'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Speakers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        Sequelize.INTEGER
      },
      first_name: {
        Sequelize.STRING
      },
      last_name: {
        Sequelize.STRING
      },
      twitter: {
        Sequelize.STRING
      },
      // etc. there's one of these blocks for each attribute
      // the 2 below are automatically generated
      createdAt: {
        allowNull: false,
        Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Speakers');
  }
};
```

Now is the time to add any options or additional modifiers to any of the attributes of the Speaker schema.  Make sure that any modifications that you make in one file, you mirror appropriately in the other.

When ready, cross your fingers and run the migration for the development and test environments:

```sh
$ node_modules/.bin/sequelize db:migrate
$ node_modules/.bin/sequelize db:migrate --env test
```

### Check your work

As we learned yesterday, just because the CLI says that it ran the migration, doesn't necessarily mean that it did what we wanted. Go ahead and inspect the table to secure your sanity:

```
$ psql guest_app
guest_app=# \d "Speakers"
```

You should get something back that looks like this:

```
                                      Table "public.Speakers"
    Column     |           Type           |                        Modifiers
---------------+--------------------------+---------------------------------------------------------
 id            | integer                  | not null default nextval('"Speakers_id_seq"'::regclass)
 first_name    | character varying(255)   |
 last_name     | character varying(255)   |
 twitter       | character varying(255)   |
 linkedin      | character varying(255)   |
 email         | character varying(255)   |
 topic         | character varying(255)   |
 speaking_date | timestamp with time zone |
 github        | character varying(255)   |
 votes         | integer                  |
 company       | character varying(255)   |
 role          | character varying(255)   |
 createdAt     | timestamp with time zone | not null
 updatedAt     | timestamp with time zone | not null
Indexes:
    "Speakers_pkey" PRIMARY KEY, btree (id)
```