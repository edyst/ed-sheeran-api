# Generate PDFs from the Markdown source files
#
# In order to use this makefile, you need some tools:
# - GNU make
# - Pandoc
# - LuaLaTeX
# - DejaVu Sans fonts

# Directory containing source (Markdown) files
source := src

# Directory containing pdf files
output := out

# All markdown files in src/ are considered sources
sources := $(wildcard $(source)/*.md)

# Convert the list of source files (Markdown files in directory src/)
# into a list of output files (PDFs in directory print/).
objects := $(patsubst %.md,%.pdf,$(subst $(source),$(output),$(sources)))

all: $(objects)

# Recipe for converting a Markdown file into PDF using Pandoc
$(output)/%.pdf: $(source)/%.md
		pandoc --table-of-contents \
			--number-sections \
			--highlight-style tango \
			-M date="$(date "+%B %e, %Y")" \
			-o $@ \
			$<

.PHONY : clean

clean:
	rm -f $(output)/*.pdf