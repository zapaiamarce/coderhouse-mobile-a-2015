MSSG="Commit message"
pushall=false

while test $# -gt 0; do
        case "$1" in
                -a|--all)
                      	pushall=true
                      	shift
                ;;
                -m)
						shift
                      	MSSG=$1
                      	shift
                ;;
                *)
                        break
                ;;
        esac
done


git add .
git commit -am "$MSSG"
git push heroku HEAD