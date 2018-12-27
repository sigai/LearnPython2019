from pathlib import Path
from datetime import datetime
import fire


def stamp_to_string(stamp):
    return datetime.utcfromtimestamp(int(stamp)).strftime('%Y-%m-%d %H:%M:%S')

SUFFIXES = {1000: ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            1024: ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']}


def approximate_size(size, a_kilobyte_is_1024_bytes=True):
    if size < 0:
        raise ValueError('number must be non-negative')
    multiple = 1024 if a_kilobyte_is_1024_bytes else 1000
    for suffix in SUFFIXES[multiple]:
        size /= multiple
        if size < multiple:
            return '{0:.1f} {1}'.format(size, suffix)
    raise ValueError('number too large')


def tree(path):
    if path.is_file():
        return f"<li style='color:black;'>{path.name} <small>({approximate_size(int(path.stat().st_size))})</small></li>"
    else:
        sub = []
        for each in path.iterdir():
            sub.append(tree(each))
        # TODO: order by folder
        return f"<li>&#x1F4C1 {path.name} <small><{stamp_to_string(path.stat().st_ctime)}></small><ul>{''.join(sub)}</ul></li>"


if __name__ == '__main__':
    with open("code.txt", mode="w", encoding="utf-8") as f:
        f.write(tree(Path("WorkBench")))
