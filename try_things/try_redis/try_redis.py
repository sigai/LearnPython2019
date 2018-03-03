from redis import StrictRedis

redis = StrictRedis.from_url('redis://@localhost:6379/1')
redis.sadd('urls')
redis.spop('urls')
