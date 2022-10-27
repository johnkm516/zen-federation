FROM dpage/pgadmin4:latest
USER pgadmin
RUN mkdir -p  /var/lib/pgadmin/storage/mis_hansae.com
COPY ./pgadmin/pgpass /var/lib/pgadmin/storage/mis_hansae.com
USER root
RUN chown pgadmin /var/lib/pgadmin/storage/mis_hansae.com/pgpass
RUN chmod 0600 /var/lib/pgadmin/storage/mis_hansae.com/pgpass
USER pgadmin
ENTRYPOINT ["/entrypoint.sh"]