#!/bin/sh
PGADMIN_EMAIL_UNDERSCORE=$(echo "$PGADMIN_EMAIL" | sed 's/@/_/g')
echo "Overwriting pgpass file at "/var/lib/pgadmin/storage/"$PGADMIN_EMAIL_UNDERSCORE"/pgpass""
cp /pgadmin4/pgpass "/var/lib/pgadmin/storage/$PGADMIN_EMAIL_UNDERSCORE/pgpass"
echo "Changing permissions on pgpass file..."
chown pgadmin "/var/lib/pgadmin/storage/$PGADMIN_EMAIL_UNDERSCORE/pgpass"
chmod 0600 "/var/lib/pgadmin/storage/$PGADMIN_EMAIL_UNDERSCORE/pgpass"
echo "Replacing pgadmin servers config with new servers.json for user $PGADMIN_EMAIL..."
/venv/bin/python3 /pgadmin4/setup.py --user "$PGADMIN_EMAIL" --load-servers /pgadmin4/servers.json --replace

exec "$@"