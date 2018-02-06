import requests
import pygal
from pygal.style import LightColorizedStyle as LCS, LightenStyle as LS
url = "https://api.github.com/search/repositories?q=language:python&sort=stars"
r = requests.get(url)
print("Status code", r.status_code)
res_dict = r.json()
print("Total repos", res_dict["total_count"])

items = res_dict["items"]

names, plot_dicts = [], []

for item in items:
    names.append(item["name"])
    plot_dict = {
        "value": item["stargazers_count"],
        "lavel": item["description"],
        "xlink": item["html_url"],
        #"ntm": str(item["description"]) if item["description"] else "Nothing",
        }
    # if "Requests" in plot_dict["ntm"]:
    #     plot_dict["ntm"] = "fuck"
    plot_dicts.append(plot_dict)
my_style = LS('#333366', base_style=LCS)
my_config = pygal.Config()
my_config.x_label_rotation = 45
my_config.show_legend = False
my_config.title_font_size = 24
my_config.label_font_size = 14
my_config.major_label_font_size = 14
my_config.truncate_label = 15
my_config.show_y_guides = False
my_config.width = 1000

chart = pygal.Bar(my_config, style=my_style)
chart.title = "Most-Starred Python Projects on GitHub"
chart.x_labels = names
chart.y_label = range(0, 55000, 5000)
chart.add("", plot_dicts)
chart.render_to_file("python_repos.svg")
print(plot_dicts)
